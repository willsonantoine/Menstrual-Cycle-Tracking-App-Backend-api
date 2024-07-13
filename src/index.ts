import moment from "moment";

class CycleMenstruel {
  dernierJourDesRegles: moment.Moment;
  prochaineOvulation: moment.Moment;
  periodeFertile: {
    debut: moment.Moment;
    fin: moment.Moment;
  };
  prochainsRegles: moment.Moment;
  phaseActuelle: string;

  constructor(dernierJourDesRegles: string, dureeCycle: number) {
    this.dernierJourDesRegles = moment(dernierJourDesRegles, "YYYY-MM-DD");
    this.prochaineOvulation = this.dernierJourDesRegles.clone().add(14, "days");
    this.periodeFertile = {
      debut: this.prochaineOvulation.clone().subtract(5, "days"),
      fin: this.prochaineOvulation.clone().add(2, "days"),
    };
    this.prochainsRegles = this.dernierJourDesRegles
      .clone()
      .add(dureeCycle, "days");
    this.phaseActuelle = this.calculerPhaseActuelle();
  }

  private calculerPhaseActuelle(): string {
    const aujourdHui = moment();
    if (aujourdHui.isBefore(this.periodeFertile.debut)) {
      return "Pré-ovulation";
    } else if (
      aujourdHui.isBetween(
        this.periodeFertile.debut,
        this.periodeFertile.fin,
        null,
        "[]"
      )
    ) {
      return "Période fertile";
    } else if (
      aujourdHui.isBetween(
        this.periodeFertile.fin,
        this.prochainsRegles,
        null,
        "[]"
      )
    ) {
      return "Post-ovulation";
    } else {
      return "Règles";
    }
  }

  afficherInformations() {
    console.log(
      "Dernier jour des règles:",
      this.dernierJourDesRegles.format("DD/MM/YYYY")
    );
    console.log(
      "Prochaine ovulation:",
      this.prochaineOvulation.format("DD/MM/YYYY")
    );
    console.log(
      "Période fertile - Début:",
      this.periodeFertile.debut.format("DD/MM/YYYY")
    );
    console.log(
      "Période fertile - Fin:",
      this.periodeFertile.fin.format("DD/MM/YYYY")
    );
    console.log("Prochains règles:", this.prochainsRegles.format("DD/MM/YYYY"));
    console.log("Phase actuelle:", this.phaseActuelle);
  }
}

// Utilisation
const dernieresRegles = "2023-11-10";
const dureeCycle = 28;
const cycle = new CycleMenstruel(dernieresRegles, dureeCycle);
cycle.afficherInformations();
