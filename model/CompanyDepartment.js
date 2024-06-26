module.exports = (sequelize, DataTypes, Model) => {
    class CompanyDepartment extends Model {
      static associate(models) {
        CompanyDepartment.belongsTo(models.Company, {
          foreignKey: "company_id",
          onDelete: "CASCADE",
        });
      }
    }
    CompanyDepartment.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: sequelize.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        company_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        parent_id: {
          type: DataTypes.UUID,
          allowNull: true,
        },
        created_by: {
          type: DataTypes.UUID,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: sequelize.NOW,
        },
        archived_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
        deleted_at: {
          type: DataTypes.DATE,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "company_department",
        tableName: "company_departments",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
    return CompanyDepartment;
  };