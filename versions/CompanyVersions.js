const CompanyController = require('../controller/CompanyController');

class CompanyVersions {

  async paginated(req, res) {
    const version = req.params.version;

    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        CompanyController.paginated(req, res);
        break;
      case 'v2':
        CompanyController.paginatedV2(req, res);
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
        CompanyController.create(req, res);
        break;
      case 'v2':
        CompanyController.createV2(req, res);
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
        CompanyController.show(req, res);
        break;
      case 'v2':
        CompanyController.showV2(req, res);
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
        CompanyController.update(req, res);
        break;
      case 'v2':
        CompanyController.updateV2(req, res);
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
        CompanyController.delete(req, res);
        break;
      case 'v2':
        CompanyController.deleteV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }

}
module.exports = new CompanyVersions();
