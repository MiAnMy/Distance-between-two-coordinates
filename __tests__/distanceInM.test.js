const { haversineInKM, distanceInM } = require("../server/modules/distance");

describe("Tests for distanceInM function", () => {
  test("[0,0] and [0,0] to be equal 0m", () => {
    const km = haversineInKM(0, 0, 0, 0);
    expect(distanceInM(km)).toBe(0);
  });

  test("[0,180] and [0,180] to be equal 0m", () => {
    const km = haversineInKM(0, 180, 0, 180);
    expect(distanceInM(km)).toBe(0);
  });

  test("[90,0] and [90,0] to be equal 0m", () => {
    const km = haversineInKM(90, 0, 90, 0);
    expect(distanceInM(km)).toBe(0);
  });

  test("Polar circle to be close to 15597000m", () => {
    const km = haversineInKM(66, 33, -66, -33);
    expect(distanceInM(km)).toBeCloseTo(15597000, -2);
  });

  test("Prime meridian to be close to 20037000m", () => {
    const km = haversineInKM(90, 0, -90, 0);
    expect(distanceInM(km)).toBeCloseTo(20037000, -4);
  });

  test("Equator to be close to 40075000m", () => {
    const half = haversineInKM(0, 180, 0, 0);
    expect(distanceInM(half * 2)).toBeCloseTo(40075000, -2);
  });
});
