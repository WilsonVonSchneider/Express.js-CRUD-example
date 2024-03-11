const CompanyDepartmentController = require('../controller/CompanyDepartmentController.js');

class CompanyDepartmentVersions {

  async create(req, res) {
    const version = req.params.version;

    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        CompanyDepartmentController.create(req, res);
        break;
      case 'v2':
        CompanyDepartmentController.createV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }

  async list(req, res) {
    const version = req.params.version;

    // Convert the version to lowercase for consistent routing
    const lowercaseVersion = version.toLowerCase();

    // Create different routes based on the lowercase version
    switch (lowercaseVersion) {
      case 'v1':
        CompanyDepartmentController.list(req, res);
        break;
      case 'v2':
        CompanyDepartmentController.listV2(req, res);
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
        CompanyDepartmentController.show(req, res);
        break;
      case 'v2':
        CompanyDepartmentController.showV2(req, res);
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
        CompanyDepartmentController.update(req, res);
        break;
      case 'v2':
        CompanyDepartmentController.updateV2(req, res);
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
        CompanyDepartmentController.delete(req, res);
        break;
      case 'v2':
        CompanyDepartmentController.deleteV2(req, res);
        break;
      default:
        // Handle the default case or version not found
        res.status(404).json({ error: 'Version not found' });
        break;
    }
  }

}
module.exports = new CompanyDepartmentVersions();
