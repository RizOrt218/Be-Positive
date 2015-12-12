BloodType = {

  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {

  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 40,

  /**
   * returns BloodType, or false to give no BloodType
   *
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   *
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   *
   */

  receive_patient : function (blood_inventory, patient) {

    var blood_type;

    // this.patient = patient;
    // this.blood_inventory = blood_inventory;

    if ( patient.blood_type === "AB_POS" ){
      return patient.blood_type;
    }

    if ( patient.blood_type === "AB_NEG" ){
      return patient.blood_type;
    }

    if ( patient.blood_type === "A_POS" ){
      return patient.blood_type;
    }

    if ( patient.blood_type === "A_NEG" ){
      return patient.blood_type;
    }

    if ( patient.blood_type === "B_POS" ){
      return patient.blood_type;
    }

    if ( patient.blood_type === "B_NEG" ){
      return patient.blood_type;
    }

    if ( patient.blood_type === "O_POS" ){
      return patient.blood_type;
    }

    if ( patient.blood_type === "O_NEG" ){
      return patient.blood_type;
    }

  }
};

//chris wilson
//>
//>
//>
//so when a patient comes in, the recieve function is run
//blood_inventory and patient information are passed through the function
//i have an array called bloodTypes that contains all the blood types
//this array is equal to the array that is returned from the function

//i use indexOf(patient.bloodtype) to find the position of the patients blood type
//in the bloodTypes array.  If a+ is in position 0 of bloodTypes array it will also
//be in positon 0 of the return array
//i store the index/position of the patients bloodtype that i found through indexOf
//and use that index to return the proper bloodtype in the return statement