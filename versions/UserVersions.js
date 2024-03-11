const UserController = require('../controller/UserController');

class UserVersions {

  async paginated(req, res) {
    const version = req.params.version;

    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        UserController.paginated(req, res);
        break;
      case 'v2':
        UserController.paginatedV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }
  async create(req, res) {
    const version = req.params.version;

    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        UserController.create(req, res);
        break;
      case 'v2':
        UserController.createV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }

  async show(req, res) {
    const version = req.params.version;
  
    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        UserController.show(req, res);
        break;
      case 'v2':
        UserController.showV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }

  async update(req, res) {
    const version = req.params.version;
  
    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        UserController.update(req, res);
        break;
      case 'v2':
        UserController.updateV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }

  async delete(req, res) {
    const version = req.params.version;
  
    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        UserController.delete(req, res);
        break;
      case 'v2':
        UserController.deleteV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }

}
module.exports = new UserVersions();
