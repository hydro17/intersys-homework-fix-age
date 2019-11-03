function fixage(arrOfAges) {
  const agesBetween18And60 = arrOfAges.filter((age) => age >= 18 && age <= 60).join(",");

  return agesBetween18And60 !== "" ? agesBetween18And60 : "NA";
}
