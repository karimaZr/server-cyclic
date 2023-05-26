const Resto = require('../models/Restaurant');

class RestoService {
  constructor(restoModel) {
    this.restoModel = restoModel;
  }

  // Get all resto
  async getAllRestos() {
    try {
      const restos = await this.restoModel.find();
      return restos;
    } catch (error) {
      throw new Error(`Unable to fetch restos: ${error}`);
    }
  }

  // Get zones by city ID
 //async getZonesByCityId(cityId) {
 //  try {
 //    const zones = await this.zoneModel.find({ city: cityId });
 //    return zones;
 //  } catch (error) {
 //    throw new Error(`Unable to fetch zones for city ${cityId}: ${error}`);
 //  }
 //}

 //// Get a zone by ID
async getRestoById(id) {
  try {
    const resto = await this.restoModel.findById(id);
    if (!resto) {
      throw new Error(`Zone not found with ID ${id}`);
    }
    return resto;
  } catch (error) {
    throw new Error(`Unable to fetch zone with ID ${id}: ${error}`);
  }
}

 //// Get restos by zone ID
 async getRestoByZoneId(cityId) {
   try {
     const resto = await this.restoModel.find({zone : cityId});
     if (!resto) {
       throw new Error(`Resto not found with ID ${cityId}`);
     }
     return resto;
   } catch (error) {
     throw new Error(`Unable to fetch zone with ID ${id}: ${error}`);
   }
 }

 ///Get restos by zone_ID && spacialities_ID
 async getRestoByZandS(cityId,specialiteIds) {
  try {
    const resto = await this.restoModel.find({zone : cityId, specialite: {$in: specialiteIds}});
    if (!resto) {
      throw new Error(`Resto not found with ID ${cityId}`);
    }
    return resto;
  } catch (error) {u
    throw new Error(`Unable to fetch zone with ID ${id}: ${error}`);
  }
}

 //// Save a new zone
 async createResto(resto) {
   try {
     const newResto = new Resto(resto);
     const savedResto = await newResto.save();
     return savedResto;
   } catch (error) {
     throw new Error(`Unable to create Resto: ${error}`);
   }
 }

 //// Update a resto
 async updateResto(id, updatedResto) {
  try {
    const existingResto = await this.restoModel.findById(id);
    if (!existingResto) {
      return null;
    }
    existingResto.name = updatedResto.name;
    const updated = await existingCity.save();
    return updated;
  } catch (error) {
    throw new Error(`Unable to update Resto with ID ${id}: ${error}`);
  }
}
 

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

module.exports = RestoService;
