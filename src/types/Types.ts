type ArrayOfNumbersType = number;

type ElementInfoType = {
  name: string;
  appearance: string | null;
  atomic_mass: number;
  boil: number | null;
  category: string;
  color: string | null;
  density: number | null;
  discovered_by: string | null;
  melt: number | null;
  molar_heat: number | null;
  named_by: string | null;
  number: number;
  period: number;
  phase: string;
  source: string;
  spectral_img: string | null;
  summary: string;
  symbol: string;
  xpos: number;
  ypos: number;
  shells: ArrayOfNumbersType[];
  electron_configuration: string;
  electron_affinity: number | null;
  electronegativity_pauling: number | null;
  ionization_energies: ArrayOfNumbersType[];
};

type ElementType = {
  element: ElementInfoType;
};

type ElementDisplay = {
  title?: string;
  info: string | null | number;
};

type CategoryType = {
  cur: string;
};
