//import { NUMERIC } from "sequelize";
import { Sequelize } from "sequelize";
import db from "../config/dataBase.js";
 
//const { DataTypes } = Sequelize;

const Customer = db.define('customers',{
    Name: { type: String,  },
    email: { type: String,  },
    cellno: { type: String,  },
    nameg: { type: String},
    birthdate: { type: String,  },
    father_fname: { type: String,  },
    father_lname: { type: String,  },
    mother_fname: { type: String,  },
    mother_lname: { type: String,  },
    marital_status: { type: String,  },
    citizen: { type: String,  },
    resident: { type: String,  },
    pancard: { type: String,  },
    ckyc: { type: String,  },
    profession: { type: String,  },
    company: { type: String,  },
    designation: { type: String,  },
    gross: { type: String,  },
    coemail: { type: String,  },
    house: { type: String,  },
    street: { type: String,  },
    area: { type: String,  },
    landmark: { type: String,  },
    pincode: { type: String,  },
    city: { type: String,  },
    image: { type: String,  },
    }, {
      timestamps: true,
      freezeTableName: true
    });
 
export default Customer;