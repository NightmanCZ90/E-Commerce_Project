const fs = require('fs');

class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error('Creating a repository requires a filename');
    }

    this.filename = filename;
    try {
      fs.accessSync(this.filename); //fs.access'Sync' not recommended in constructor, only for purpose of this project!! because we expect only ever create exactly one user repository
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  async getAll() {
    const contents = await fs.promises.readFile(this.filename, { encoding: 'utf8' });
    console.log(contents)
  }
}

const test = async () => {
  const repo = new UsersRepository('users.json');

  await repo.getAll();
};

test();