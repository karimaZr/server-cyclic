const Specialite = require('../models/Specialité');

class SpecialiteService {
  constructor(specialiteModel) {
    this.specialiteModel = specialiteModel;
  }

  // Get all resto
  async getAllSpecialite() {
    try {
      const specialites = await this.specialiteModel.find();
      return specialites;
    } catch (error) {
      throw new Error(`Unable to fetch restos: ${error}`);
    }
  }

  // Get zones by city ID
  async getSpecialiteById(id) {
    try {
      const specialite = await this.specialiteModel.findById(id);
      if (!specialite) {
        throw new Error(`Zone not found with ID ${id}`);
      }
      return specialite;
    } catch (error) {
      throw new Error(`Unable to fetch zone with ID ${id}: ${error}`);
    }
  }

 //// Get a zone by ID
//async getRestoById(id) {
//  try {
//    const resto = await this.restoModel.findById(id);
//    if (!resto) {
//      throw new Error(`Zone not found with ID ${id}`);
//    }
//    return resto;
//  } catch (error) {
//    throw new Error(`Unable to fetch zone with ID ${id}: ${error}`);
//  }
//}
//
// //// Get restos by zone ID
// async getRestoByZoneId(cityId) {
//   try {
//     const resto = await this.restoModel.find({zone : cityId});
//     if (!resto) {
//       throw new Error(`Resto not found with ID ${cityId}`);
//     }
//     return resto;
//   } catch (error) {
//     throw new Error(`Unable to fetch zone with ID ${id}: ${error}`);
//   }
// }
//
// //// Save a new zone
async createSpecialite(specialite) {
  try {
    const newSpecialite = new Specialite(specialite);
    const savedSpecialite = await newSpecialite.save();
    return savedSpecialite;
  } catch (error) {
    throw new Error(`Unable to create Specialite: ${error}`);
  }
}

 //// Update a zone
 //async updateZone(id, updatedZone) {
 //  try {
 //    const existingZone = await this.zoneModel.findById(id);
 //    if (!existingZone) {
 //      throw new Error(`Zone not found with ID ${id}`);
 //    }
 //    existingZone.name = updatedZone.name;
 //    existingZone.city = updatedZone.city;
 //    const updated = await existingZone.save();
 //    return updated;
 //  } catch (error) {
 //    throw new Error(`Unable to update zone with ID ${id}: ${error}`);
 //  }
 //}

 //// Delete a zone by ID
 //async deleteZone(id) {
 // try {
 //   const deleted = await this.zoneModel.findByIdAndDelete(id);
 //  if (!deleted) {
 //    throw new Error(`Zone not found with ID ${id}`);
 //  }
 //  return deleted;
 //} catch (error) {
 //  throw new Error(`Unable to delete zone with ID ${id}: ${error}`);
 //}
 //
}

module.exports = SpecialiteService;
