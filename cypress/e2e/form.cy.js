/// <reference types="Cypress" />

describe("Testing form", () => {
  it("Open site", () => {
    cy.visit("http://localhost:3000");
  });

  it("Form exists", () => {
    cy.get("form").should("exist");
  });

  it("Distance should not exists", () => {
    cy.get(".distance").should("not.exist");
  });

  it("Number inputs should contain max and min values base on geographic coordinate system", () => {
    const maxLat = 90;
    const maxLon = 180;

    cy.get("#Latitude1").then((el) => {
      cy.wrap(el).invoke("attr", "max").should("contain", maxLat);
      cy.wrap(el).invoke("attr", "min").should("contain", -maxLat);
    });

    cy.get("#Longitude1").then((el) => {
      cy.wrap(el).invoke("attr", "max").should("contain", maxLon);
      cy.wrap(el).invoke("attr", "min").should("contain", -maxLon);
    });

    cy.get("#Latitude2").then((el) => {
      cy.wrap(el).invoke("attr", "max").should("contain", maxLat);
      cy.wrap(el).invoke("attr", "min").should("contain", -maxLat);
    });

    cy.get("#Longitude2").then((el) => {
      cy.wrap(el).invoke("attr", "max").should("contain", maxLon);
      cy.wrap(el).invoke("attr", "min").should("contain", -maxLon);
    });
  });

  it("Form starts with zeros", () => {
    cy.reload();

    cy.get("#Latitude1").should("have.value", 0);
    cy.get("#Longitude1").should("have.value", 0);
    cy.get("#Latitude2").should("have.value", 0);
    cy.get("#Longitude2").should("have.value", 0);
  });

  it("Form fails on wrong Latitude", () => {
    cy.reload();

    cy.get("#Latitude1").clear().type(-91);
    cy.get("input[type='submit']").click();
    cy.get("input:invalid").should("have.length", 1);
  });

  it("Form fails on wrong Longitude", () => {
    cy.reload();

    cy.get("#Longitude1").clear().type(181);
    cy.get("input[type='submit']").click();
    cy.get("input:invalid").should("have.length", 1);
  });

  it("Form returns data on correct input", () => {
    cy.reload();
    const lat1 = 52.323;
    const lon2 = 123.123;
    const distance = {
      km: null,
      m: null,
    };

    cy.get("#Latitude1").clear().type(lat1);
    cy.get("#Longitude2").clear().type(lon2);

    cy.request(
      `http://localhost:5000/lat1=${lat1}&lon1=0&lat2=0&lon2=${lon2}`
    ).as("calc");

    cy.get("@calc")
      .should((response) => {
        distance.km = response.body.km;
        distance.m = response.body.m;
      })
      .then(() => {
        cy.get("input[type='submit']").click();

        cy.get(".distance")
          .should("exist")
          .should(
            "have.text",
            ` The distance is: ${distance.km.toFixed(
              2
            )} Kilometers or ${distance.m.toFixed(2)} Meters `
          );
      });
  });
});
