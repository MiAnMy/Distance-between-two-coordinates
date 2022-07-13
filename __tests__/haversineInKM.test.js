const { haversineInKM } = require("../server/modules/distance");

describe("Tests for haversineInKM function", () => {
  test("[0,0] and [0,0] to be equal 0km ", () => {
    expect(haversineInKM(0, 0, 0, 0)).toBe(0);
  });

  test("[0,180] and [0,180] to be equal 0km", () => {
    expect(haversineInKM(0, 180, 0, 180)).toBe(0);
  });

  test("[90,0] and [90,0] to be equal 0km", () => {
    expect(haversineInKM(90, 0, 90, 0)).toBe(0);
  });

  test("Polar circle to be close to 15597km", () => {
    expect(haversineInKM(66, 33, -66, -33)).toBeCloseTo(15597, 0);
  });

  test("Prime meridian to be close to 20037km", () => {
    expect(haversineInKM(90, 0, -90, 0)).toBeCloseTo(20037, -1);
  });

  test("Equator to be close to 40075km ", () => {
    const half = haversineInKM(0, 180, 0, 0);
    expect(half * 2).toBeCloseTo(40075, 0);
  });
});
