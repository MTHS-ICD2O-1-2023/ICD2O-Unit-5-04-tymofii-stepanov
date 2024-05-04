// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict";

/**
* This function checks if the user qualifies for museum discount
*/
function checkDiscount() {
  // input
  const age = parseInt(document.getElementById('user-age').value);
  const dayOfWeek = document.getElementById('day-of-week').value;

  // process
  let shouldGetDiscount = false;
  if ((age < 18 || age > 65) && (dayOfWeek === 'Tuesday' || dayOfWeek === 'Thursday')) {
    shouldGetDiscount = true;
  }

  // output
  if (shouldGetDiscount) {
    document.getElementById('discount-result').innerHTML = 'Congratulations! You qualify for a museum discount.';
  } else {
    document.getElementById('discount-result').innerHTML = 'Sorry, you do not qualify for a museum discount.';
  }
}
