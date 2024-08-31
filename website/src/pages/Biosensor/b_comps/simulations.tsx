/** eslint-disable @typescript-eslint/no-unused-vars */
export default (input: { [x: string]: number }) => {
  const permitivityOfFreeSpace = 8.85e-12;
  const boltzmannConstant = 1.38064852e-23;
  const electronCharge = 1.602176634e-19;
  const avagadroNumber = 6.02214076e23;
  // const faradayConstant = electronCharge * avagadroNumber;
  // const gasConstant = boltzmannConstant * avagadroNumber;
  const pi = Math.PI;
  const siliconDensity = 2330;
  const siliconSpecificHeatCapacity = 710;
  const siliconDioxideDensity = 2270;
  const siliconDioxideSpecificHeatCapacity = 730;
  const titaniumDensity = 4520;
  const titaniumSpecificHeatCapacity = 540;
  const aluminaDensity = 3965;
  const aluminaSpecificHeatCapacity = 753;
  const aluminumDensity = 2710;
  const aluminumSpecificHeatCapacity = 887;
  const ironDensity = 7874;
  const ironSpecificHeatCapacity = 462;
  const CNTDensity = 1400;
  const CNTSpecificHeatCapacity = 500;
  const dielectricDensity = 9680;
  const dielectricSpecificHeatCapacity = 120;
  // functionalization molecule
  const areaOfMoleculeOnCNTSurface = input.radiusOfMolecule ** 2 * pi;
  const moleculeAreaWithGap = (input.radiusOfMolecule * 2 + input.gapBetweenMolecules) ** 2;
  const volumeOfMolecule = input.radiusOfMolecule ** 2 * pi * input.lengthOfMolecule;
  const moleculeLength = input.lengthOfMolecule;
  const output: any = {}; // Define the type of the output object
  output.areaOfMoleculeOnCNTSurface = areaOfMoleculeOnCNTSurface;
  output.moleculeAreaWithGap = moleculeAreaWithGap;
  output.volumeOfMolecule = volumeOfMolecule;
  // analyte molecule
  const areaOfMoleculeOnCNTSurfaceAnalyte = input.radiusOfMoleculeAnalyte ** 2 * pi;
  const moleculeAreaWithGapAnalyte =
    (input.radiusOfMoleculeAnalyte * 2 + input.gapBetweenMoleculeAnalyte) ** 2;

  const volumeOfMoleculeAnalyte =
    input.radiusOfMoleculeAnalyte ** 2 * pi * input.lengthOfMoleculeAnalyte;
  const moleculeLengthAnalyte = input.lengthOfMoleculeAnalyte;
  output.areaOfMoleculeOnCNTSurfaceAnalyte = areaOfMoleculeOnCNTSurfaceAnalyte;

  output.moleculeAreaWithGapAnalyte = moleculeAreaWithGapAnalyte;
  output.volumeOfMoleculeAnalyte = volumeOfMoleculeAnalyte;

  // 1 nanostructure with 1 CNTs
  console.log(input);
  const CNTRadius = input.radiusOfCNTs;
  const CNTBaseArea = CNTRadius ** 2 * pi;
  console.log(CNTBaseArea);
  console.log('CNT base area');
  const CNTLength = input.lengthOfCNTs;
  const surfaceAreaOneCNT = CNTLength * CNTRadius * 2 * pi + CNTBaseArea;
  const areaOneCNTAndGap = (2 * CNTRadius + input.gapBetweenCNTs) ** 2;

  const nanostructureLength = input.lengthOfBase;
  const nanostructureWidth = input.widthOfBase;
  const nanostructureBaseArea = nanostructureLength * nanostructureWidth;
  const numberOfCNTsInOneNanostructure = nanostructureBaseArea / areaOneCNTAndGap;
  const surfaceAreaOneNanostructure = numberOfCNTsInOneNanostructure * surfaceAreaOneCNT;
  output.surfaceAreaOneCNT = surfaceAreaOneCNT;
  output.CNTBaseArea = CNTBaseArea;
  output.areaOneCNTAndGap = areaOneCNTAndGap;
  output.nanostructureBaseArea = nanostructureBaseArea;
  output.numberOfCNTsInOneNanostructure = numberOfCNTsInOneNanostructure;
  output.surfaceAreaOneNanostructure = surfaceAreaOneNanostructure;
  //chip with nanostructures
  const numberOfNanostructurePairsOnChipNum = input.lengthOfChip * input.widthOfChip;
  const numberOfNanostructurePairsOnChipDen =
    nanostructureBaseArea * 2 + nanostructureLength * input.gapBetweenNanostructures;
  const numberOfNanostructurePairsOnChip =
    numberOfNanostructurePairsOnChipNum / numberOfNanostructurePairsOnChipDen;
  const areaBetweenNanostructures = input.gapBetweenNanostructures * nanostructureLength;
  output.numberOfNanostructurePairsOnChip = numberOfNanostructurePairsOnChip;

  output.areaBetweenNanostructures = areaBetweenNanostructures;
  // NS capacitance of analyte molecule
  const capacitanceFunctionalAnalytePerUnitArea =
    (input.dielectricOfMoleculeAnalyte * permitivityOfFreeSpace) / moleculeLengthAnalyte;
  const capacitancePerCNTAnalyte = capacitanceFunctionalAnalytePerUnitArea * surfaceAreaOneCNT;
  const capacitanceFunctionalAnalytePerNanostructure1 =
    capacitancePerCNTAnalyte * numberOfCNTsInOneNanostructure;
  const capacitanceFunctionalAnalytePerNanostructure2 =
    capacitanceFunctionalAnalytePerUnitArea * surfaceAreaOneCNT;
  output.capacitanceFunctionalAnalytePerUnitArea = capacitanceFunctionalAnalytePerUnitArea;

  output.capacitancePerCNTAnalyte = capacitancePerCNTAnalyte;
  output.capacitanceFunctionalAnalytePerNanostructure1 =
    capacitanceFunctionalAnalytePerNanostructure1;

  output.capacitanceFunctionalAnalytePerNanostructure2 =
    capacitanceFunctionalAnalytePerNanostructure2;

  // NS Cpacitance of Functionalized Molecule
  const capacitanceFunctionalPerUnitArea =
    (input.dielectricOfMolecule * permitivityOfFreeSpace) / moleculeLength;
  const capacitancePerCNT = capacitanceFunctionalAnalytePerUnitArea * surfaceAreaOneCNT;
  const capacitanceFunctionalPerNanostructure1 = capacitancePerCNT * numberOfCNTsInOneNanostructure;
  const capacitanceFunctionalPerNanostructure2 =
    capacitanceFunctionalPerUnitArea * surfaceAreaOneCNT;
  output.capacitanceFunctionalPerUnitArea = capacitanceFunctionalPerUnitArea;

  output.capacitancePerCNT = capacitancePerCNT;
  output.capacitanceFunctionalPerNanostructure1 = capacitanceFunctionalPerNanostructure1;

  output.capacitanceFunctionalPerNanostructure2 = capacitanceFunctionalPerNanostructure2;

  // functionalized NS
  const numberOfMoleculesOnOneCNTFunctionalized = surfaceAreaOneCNT / moleculeAreaWithGap;
  const totalFunctionalizedMoleculesOnNanostructure =
    numberOfMoleculesOnOneCNTFunctionalized * numberOfCNTsInOneNanostructure;
  const concentrationOfFunctionalizedMoleculesOnOneNanostructureMolesPerMeterCubed =
    totalFunctionalizedMoleculesOnNanostructure / avagadroNumber;
  const concentrationOfFunctionalizedMoleculesOnOneNanostructureMolarity =
    concentrationOfFunctionalizedMoleculesOnOneNanostructureMolesPerMeterCubed / 1000;
  output.numberOfMoleculesOnOneCNTFunctionalized = numberOfMoleculesOnOneCNTFunctionalized;

  output.totalFunctionalizedMoleculesOnNanostructure = totalFunctionalizedMoleculesOnNanostructure;

  output.concentrationOfFunctionalizedMoleculesOnOneNanostructureMolesPerMeterCubed =
    concentrationOfFunctionalizedMoleculesOnOneNanostructureMolesPerMeterCubed;

  output.concentrationOfFunctionalizedMoleculesOnOneNanostructureMolarity =
    concentrationOfFunctionalizedMoleculesOnOneNanostructureMolarity;

  // CAP
  const capacitanceOfOnePairNanostructure =
    (permitivityOfFreeSpace * input.relativePermittivity * surfaceAreaOneNanostructure) /
    input.gapBetweenNanostructures;
  const impedanceAtFrequency = 1 / (input.frequency * 2 * pi * capacitanceOfOnePairNanostructure);
  const energyNanostructure = input.voltage ** 2 * 0.5 * capacitanceOfOnePairNanostructure;
  const energy = energyNanostructure;
  const chipEnergy = numberOfNanostructurePairsOnChip * energyNanostructure;
  const power = input.voltage ** 2 / impedanceAtFrequency;
  const chipPower = power * numberOfNanostructurePairsOnChip;
  const chipImpedance = impedanceAtFrequency * numberOfNanostructurePairsOnChip;
  const chipCapacitance = numberOfNanostructurePairsOnChip * capacitanceOfOnePairNanostructure;
  output.capacitanceOfOnePairNanostructure = capacitanceOfOnePairNanostructure;
  output.impedanceAtFrequency = impedanceAtFrequency;
  output.energyNanostructure = energyNanostructure;
  output.chipEnergy = chipEnergy;
  output.power = power;
  output.chipPower = chipPower;
  output.chipImpedance = capacitancePerCNT;
  output.chipCapacitance = chipCapacitance;
  // EDL Cap
  const boltzmannTemp = boltzmannConstant * input.temperatureOfSolvent;
  const concentrationOfStandardStateMolarity = input.concentrationOfStandardState / 1000;
  const EDLLength = Math.sqrt(
    (input.relativePermittivity * permitivityOfFreeSpace * boltzmannTemp) /
      (2 *
        avagadroNumber *
        input.concentrationOfStandardState *
        input.chargeOfIonSpecies ** 2 *
        electronCharge ** 2)
  );

  const capacitanceEDLByLength = (input.relativePermittivity * permitivityOfFreeSpace) / EDLLength;
  const capacitanceEDLByLengthWithCoshFactor =
    capacitanceEDLByLength *
    Math.cosh(
      (input.zetaPotential * input.chargeOfIonSpecies * electronCharge) / (2 * boltzmannTemp)
    );

  const capacitanceEDLByArea =
    (capacitanceEDLByLengthWithCoshFactor / capacitanceEDLByLength) *
    Math.sqrt(
      (avagadroNumber *
        2 *
        input.concentrationOfStandardState *
        input.relativePermittivity *
        permitivityOfFreeSpace *
        input.chargeOfIonSpecies ** 2 *
        electronCharge ** 2) /
        boltzmannTemp
    );

  const capacitanceEDLPerCNT = capacitanceEDLByArea * surfaceAreaOneCNT;
  const capacitanceEDLPerNanostructure = capacitanceEDLPerCNT * numberOfCNTsInOneNanostructure;
  output.concentrationOfStandardStateMolarity = concentrationOfStandardStateMolarity;

  output.EDLLength = EDLLength;
  output.capacitanceEDLByLength = capacitanceEDLByLength;
  output.capacitanceEDLByLengthWithCoshFactor = capacitanceEDLByLengthWithCoshFactor;

  output.capacitanceEDLByArea = capacitanceEDLByArea;
  output.capacitanceEDLPerCNT = capacitanceEDLPerCNT;
  output.capacitanceEDLPerNanostructure = capacitanceEDLPerNanostructure;
  // echem signal
  const capacitanceOfEDLAndFunctionalizationAndAnalyte =
    1 /
    (1 / capacitanceEDLPerNanostructure +
      1 / capacitanceFunctionalPerNanostructure1 +
      1 / capacitanceFunctionalAnalytePerNanostructure1);
  const capacitanceOfEDLAndFunctionalization =
    1 / (1 / capacitanceEDLPerNanostructure + 1 / capacitanceFunctionalPerNanostructure1);
  const changeInCapacitanceWithAnalyte =
    capacitanceOfEDLAndFunctionalizationAndAnalyte - capacitanceOfEDLAndFunctionalization;
  const impedanceOfEDLAndFunctionalizationAndAnalyte =
    1 / capacitanceOfEDLAndFunctionalizationAndAnalyte / 2 / pi / input.frequency;
  const totalSeriesImpedanceWithEDLAndFunctionalizationAndAnalyte =
    input.seriesResistanceOfSolution + impedanceOfEDLAndFunctionalizationAndAnalyte;
  const impedadanceOfEDLAndFunctionalization =
    1 / capacitanceOfEDLAndFunctionalization / 2 / pi / input.frequency;
  const totalSeriesImpedanceWithEDLAndFunctionalization =
    impedadanceOfEDLAndFunctionalization + input.seriesResistanceOfSolution;
  const changeInTotalSeriesImpedance =
    totalSeriesImpedanceWithEDLAndFunctionalization -
    totalSeriesImpedanceWithEDLAndFunctionalizationAndAnalyte;
  const totalImpedanceMagnitudeWithEDLandFunctionalization = Math.sqrt(
    impedadanceOfEDLAndFunctionalization ** 2 + input.seriesResistanceOfSolution ** 2
  );

  const totalImpedanceMagnitudeWithEDLandFunctionalizationAndAnalyte = Math.sqrt(
    impedanceOfEDLAndFunctionalizationAndAnalyte ** 2 + input.seriesResistanceOfSolution ** 2
  );

  const maxCurrentWithSolventAndEDLAndFunctionalization =
    input.zetaPotential / totalImpedanceMagnitudeWithEDLandFunctionalization;
  const maxCurrentWithSolventAndEDLAndFunctionalizationAndAnalyte =
    input.zetaPotential / totalImpedanceMagnitudeWithEDLandFunctionalizationAndAnalyte;
  const changeInMaxCurrent =
    maxCurrentWithSolventAndEDLAndFunctionalizationAndAnalyte -
    maxCurrentWithSolventAndEDLAndFunctionalization;
  const resistanceForMaxCurrentEDLAndFunctionalizationAndAnalyte =
    input.maxVOut / maxCurrentWithSolventAndEDLAndFunctionalizationAndAnalyte;
  const resistanceForMaxCurrentEDLAndFunctionalization =
    input.maxVOut / maxCurrentWithSolventAndEDLAndFunctionalization;
  output.capacitanceOfEDLAndFunctionalizationAndAnalyte =
    capacitanceOfEDLAndFunctionalizationAndAnalyte;

  output.capacitanceOfEDLAndFunctionalization = capacitanceOfEDLAndFunctionalization;

  output.changeInCapacitanceWithAnalyte = changeInCapacitanceWithAnalyte;
  output.impedanceOfEDLAndFunctionalizationAndAnalyte =
    impedanceOfEDLAndFunctionalizationAndAnalyte;

  output.totalSeriesImpedanceWithEDLAndFunctionalizationAndAnalyte =
    totalSeriesImpedanceWithEDLAndFunctionalizationAndAnalyte;

  output.impedadanceOfEDLAndFunctionalization = impedadanceOfEDLAndFunctionalization;

  output.totalSeriesImpedanceWithEDLAndFunctionalization =
    totalSeriesImpedanceWithEDLAndFunctionalization;

  output.changeInTotalSeriesImpedance = changeInTotalSeriesImpedance;
  output.totalImpedanceMagnitudeWithEDLandFunctionalization =
    totalImpedanceMagnitudeWithEDLandFunctionalization;

  output.totalImpedanceMagnitudeWithEDLandFunctionalizationAndAnalyte =
    totalImpedanceMagnitudeWithEDLandFunctionalizationAndAnalyte;

  output.maxCurrentWithSolventAndEDLAndFunctionalization =
    maxCurrentWithSolventAndEDLAndFunctionalization;

  output.maxCurrentWithSolventAndEDLAndFunctionalizationAndAnalyte =
    maxCurrentWithSolventAndEDLAndFunctionalizationAndAnalyte;

  output.changeInMaxCurrent = changeInMaxCurrent;
  output.resistanceForMaxCurrentEDLAndFunctionalizationAndAnalyte =
    resistanceForMaxCurrentEDLAndFunctionalizationAndAnalyte;

  output.resistanceForMaxCurrentEDLAndFunctionalization =
    resistanceForMaxCurrentEDLAndFunctionalization;

  // si material properties
  const siliconVolume = input.siliconThickness * nanostructureBaseArea;
  const siliconMass = siliconVolume * siliconDensity;
  const siliconMassTimesHeatCapacity = siliconMass * siliconSpecificHeatCapacity;
  const siliconTemperatureChange = energy / siliconMassTimesHeatCapacity;
  output.siliconVolume = siliconVolume;
  output.siliconMass = siliconMass;
  output.siliconMassTimesHeatCapacity = siliconMassTimesHeatCapacity;
  output.siliconTemperatureChange = siliconTemperatureChange;
  // sio2 1 material properties
  const siliconDioxideVolume = input.siliconDioxideThickness * nanostructureBaseArea;
  const siliconDioxideMass = siliconDioxideVolume * siliconDioxideDensity;
  const siliconDioxideMassTimesHeatCapacity =
    siliconDioxideMass * siliconDioxideSpecificHeatCapacity;
  const siliconDioxideTemperatureChange = energy / siliconDioxideMassTimesHeatCapacity;
  output.siliconDioxideVolume = siliconDioxideVolume;
  output.siliconDioxideMass = siliconDioxideMass;
  output.siliconDioxideMassTimesHeatCapacity = siliconDioxideMassTimesHeatCapacity;

  output.siliconDioxideTemperatureChange = siliconDioxideTemperatureChange;
  // sio2 2 material properties
  const siliconDioxideVolume2 = input.siliconDioxideThickness2 * nanostructureBaseArea;
  const siliconDioxideMass2 = siliconDioxideVolume2 * siliconDioxideDensity;
  const siliconDioxideMassTimesHeatCapacity2 =
    siliconDioxideMass2 * siliconDioxideSpecificHeatCapacity;
  const siliconDioxideTemperatureChange2 = energy / siliconDioxideMassTimesHeatCapacity2;
  output.siliconDioxideVolume2 = siliconDioxideVolume2;
  output.siliconDioxideMass2 = siliconDioxideMass2;
  output.siliconDioxideMassTimesHeatCapacity2 = siliconDioxideMassTimesHeatCapacity2;

  output.siliconDioxideTemperatureChange2 = siliconDioxideTemperatureChange2;

  // Ti material properties
  const titaniumVolume = input.titaniumThickness * nanostructureBaseArea;
  const titaniumMass = titaniumVolume * titaniumDensity;
  const titaniumMassTimesHeatCapacity = titaniumMass * titaniumSpecificHeatCapacity;
  const titaniumTemperatureChange = energy / titaniumMassTimesHeatCapacity;
  output.titaniumVolume = titaniumVolume;
  output.titaniumMass = titaniumMass;
  output.titaniumMassTimesHeatCapacity = titaniumMassTimesHeatCapacity;
  output.titaniumTemperatureChange = titaniumTemperatureChange;
  // alumina material properties
  const aluminaVolume = input.aluminaThickness * nanostructureBaseArea;
  const aluminaMass = aluminaVolume * aluminaDensity;
  const aluminaMassTimesHeatCapacity = aluminaMass * aluminaSpecificHeatCapacity;
  const aluminaTemperatureChange = energy / aluminaMassTimesHeatCapacity;
  output.aluminaVolume = aluminaVolume;
  output.aluminaMass = aluminaMass;
  output.aluminaMassTimesHeatCapacity = aluminaMassTimesHeatCapacity;
  output.aluminaTemperatureChange = aluminaTemperatureChange;
  // aluminum material properties
  const aluminumVolume = input.aluminumThickness * nanostructureBaseArea;
  const aluminumMass = aluminumVolume * aluminumDensity;
  const aluminumMassTimesHeatCapacity = aluminumMass * aluminumSpecificHeatCapacity;
  const aluminumTemperatureChange = energy / aluminumMassTimesHeatCapacity;
  output.aluminumVolume = aluminumVolume;
  output.aluminumMass = aluminumMass;
  output.aluminumMassTimesHeatCapacity = aluminumMassTimesHeatCapacity;
  output.aluminumTemperatureChange = aluminumTemperatureChange;
  // iron material properties
  const ironVolume = input.ironThickness * nanostructureBaseArea;
  const ironMass = ironVolume * ironDensity;
  const ironMassTimesHeatCapacity = ironMass * ironSpecificHeatCapacity;
  const ironTemperatureChange = energy / ironMassTimesHeatCapacity;
  output.ironVolume = ironVolume;
  output.ironMass = ironMass;
  output.ironMassTimesHeatCapacity = ironMassTimesHeatCapacity;
  output.ironTemperatureChange = ironTemperatureChange;
  // CNT material properties
  const CNTVolume = input.lengthOfCNTs * nanostructureBaseArea;
  const CNTMass = CNTVolume * CNTDensity;
  const CNTMassTimesHeatCapacity = CNTMass * CNTSpecificHeatCapacity;
  const CNTTemperatureChange = energy / CNTMassTimesHeatCapacity;
  output.CNTVolume = CNTVolume;
  output.CNTMass = CNTMass;
  output.CNTMassTimesHeatCapacity = CNTMassTimesHeatCapacity;
  output.CNTTemperatureChange = CNTTemperatureChange;
  // Dielectric material properties
  const dielectricVolume = (input.gapBetweenNanostructures / 2) * nanostructureBaseArea;
  const dielectricMass = dielectricVolume * dielectricDensity;
  const dielectricMassTimesHeatCapacity = dielectricMass * dielectricSpecificHeatCapacity;
  const dielectricTemperatureChange = energy / dielectricMassTimesHeatCapacity;
  output.dielectricVolume = dielectricVolume;
  output.dielectricMass = dielectricMass;
  output.dielectricMassTimesHeatCapacity = dielectricMassTimesHeatCapacity;
  output.dielectricTemperatureChange = dielectricTemperatureChange;
  // Si Gap Between Nanostructure Materials
  const siliconGapVolume = input.siliconThickness * nanostructureBaseArea;
  const siliconGapThickness = input.siliconThickness;
  const siliconGapMass = siliconGapVolume * siliconDensity;
  const siliconGapMassTimesHeatCapacity = siliconGapMass * siliconSpecificHeatCapacity;
  const siliconGapTemperatureChange = energy / siliconGapMassTimesHeatCapacity;
  output.siliconGapVolume = siliconGapVolume;
  output.siliconGapThickness = siliconGapThickness;
  output.siliconGapMass = siliconGapMass;
  output.siliconGapMassTimesHeatCapacity = siliconGapMassTimesHeatCapacity;
  output.siliconGapTemperatureChange = siliconGapTemperatureChange;
  // SiO2 Gap Between Nanostructure Materials
  const siliconDioxideGapVolume =
    (input.titaniumThickness + input.siliconDioxideThickness + input.siliconDioxideThickness2) *
    nanostructureBaseArea;
  const siliconDioxideGapThickness =
    input.titaniumThickness + input.siliconDioxideThickness + input.siliconDioxideThickness2;
  const siliconDioxideGapMass = siliconDioxideGapVolume * siliconDioxideDensity;
  const siliconDioxideGapMassTimesHeatCapacity =
    siliconDioxideGapMass * siliconDioxideSpecificHeatCapacity;
  const siliconDioxideGapTemperatureChange = energy / siliconDioxideGapMassTimesHeatCapacity;
  output.siliconDioxideGapVolume = siliconDioxideGapVolume;
  output.siliconDioxideGapThickness = siliconDioxideGapThickness;
  output.siliconDioxideGapMass = siliconDioxideGapMass;
  output.siliconDioxideGapMassTimesHeatCapacity = siliconDioxideGapMassTimesHeatCapacity;

  output.siliconDioxideGapTemperatureChange = siliconDioxideGapTemperatureChange;

  // Dielectric Gap Between Nanostructure Materials
  const dielectricGapVolume =
    (input.gapBetweenNanostructures / 2 +
      input.lengthOfCNTs +
      input.ironThickness +
      input.aluminumThickness +
      input.aluminaThickness) *
    nanostructureBaseArea;
  const dielectricGapThickness =
    input.gapBetweenNanostructures / 2 +
    input.lengthOfCNTs +
    input.ironThickness +
    input.aluminumThickness +
    input.aluminaThickness;
  const dielectricGapMass = dielectricGapVolume * dielectricDensity;
  const dielectricGapMassTimesHeatCapacity = dielectricGapMass * dielectricSpecificHeatCapacity;
  const dielectricGapTemperatureChange = energy / dielectricGapMassTimesHeatCapacity;
  output.dielectricGapVolume = dielectricGapVolume;
  output.dielectricGapThickness = dielectricGapThickness;
  output.dielectricGapMass = dielectricGapMass;
  output.dielectricGapMassTimesHeatCapacity = dielectricGapMassTimesHeatCapacity;

  output.dielectricGapTemperatureChange = dielectricGapTemperatureChange;
  // temperature change mass
  const totalMassTimesHeatCapacity =
    dielectricMassTimesHeatCapacity +
    CNTMassTimesHeatCapacity +
    ironMassTimesHeatCapacity +
    aluminumMassTimesHeatCapacity +
    aluminaMassTimesHeatCapacity +
    titaniumMassTimesHeatCapacity +
    siliconDioxideMassTimesHeatCapacity2 +
    siliconDioxideMassTimesHeatCapacity +
    siliconMassTimesHeatCapacity;
  const powerLoss = chipImpedance * input.chargingCurrent ** 2;
  const chargingTime = (input.chargingVoltage * chipImpedance) / input.chargingCurrent;
  const energyLoss = powerLoss * chargingTime;
  const totalTemperatureChange = energyLoss / totalMassTimesHeatCapacity;
  output.powerLoss = powerLoss;
  output.chargingTime = chargingTime;
  output.energyLoss = energyLoss;
  output.totalTemperatureChange = totalTemperatureChange;
  // mass and volume of NS pair
  const massForOneNanostructure =
    dielectricMass +
    CNTMass +
    ironMass +
    aluminumMass +
    aluminaMass +
    titaniumMass +
    siliconDioxideMass +
    siliconDioxideMass2 +
    siliconMass;
  const massForTwoNanostructure = massForOneNanostructure * 2;
  const massGap = dielectricGapMass + siliconDioxideGapMass + siliconGapMass;
  const massNanostructurePairWithGap = massGap + massForTwoNanostructure;
  const volumeForOneNanostructure =
    dielectricVolume +
    CNTVolume +
    ironVolume +
    aluminumVolume +
    aluminaVolume +
    titaniumVolume +
    siliconDioxideVolume +
    siliconDioxideVolume2 +
    siliconVolume;
  const volumeForTwoNanostructure = volumeForOneNanostructure * 2;
  const volumeGap = dielectricGapVolume + siliconDioxideGapVolume + siliconGapVolume;
  const volumeNanostructurePairWithGap = volumeGap + volumeForTwoNanostructure;
  const massChip = massNanostructurePairWithGap * numberOfNanostructurePairsOnChip;
  const volumeChip = volumeNanostructurePairWithGap * numberOfNanostructurePairsOnChip;
  output.massForOneNanostructure = massForOneNanostructure;
  output.massForTwoNanostructure = massForTwoNanostructure;
  output.massGap = massGap;
  output.massNanostructurePairWithGap = massNanostructurePairWithGap;
  output.volumeForOneNanostructure = volumeForOneNanostructure;
  output.volumeForTwoNanostructure = volumeForTwoNanostructure;
  output.volumeGap = volumeGap;
  output.volumeNanostructurePairWithGap = volumeNanostructurePairWithGap;
  output.massChip = massChip;
  output.volumeChip = volumeChip;
  // cap design
  const energyDensityWattHoursPerMetersCubedDesigned =
    input.energyDensityWattHoursPerLiterDesigned * 1000;
  const energyPerNanostructureWithGapDesigned =
    energyDensityWattHoursPerMetersCubedDesigned * volumeNanostructurePairWithGap;
  const joulesInOneNanostructurePairWithGapDesigned = energyPerNanostructureWithGapDesigned * 3600;
  output.energyDensityWattHoursPerMetersCubedDesigned =
    energyDensityWattHoursPerMetersCubedDesigned;

  output.energyPerNanostructureWithGapDesigned = energyPerNanostructureWithGapDesigned;

  output.joulesInOneNanostructurePairWithGapDesigned = joulesInOneNanostructurePairWithGapDesigned;

  // chip energy
  const chipEnergyWattHour = chipEnergy / 3600;
  const nanostructurePairEnergyPerMass = energyNanostructure / massForTwoNanostructure;
  const nanostructurePairEnergyPerVolume = energyNanostructure / volumeForTwoNanostructure;
  const chipEnergyPerMass = chipEnergyWattHour / massChip;
  const chipEnergyWattHoursPerKilogram = chipEnergyPerMass;
  const chipEnergyPerVolume = chipEnergyWattHour / volumeChip;
  const chipEnergyWattHoursPerMetersCubed = chipEnergyPerVolume;
  const chipEnergyWattHoursPerLiter = chipEnergyWattHoursPerMetersCubed / 1000;
  output.chipEnergyWattHour = chipEnergyWattHour;
  output.nanostructurePairEnergyPerMass = nanostructurePairEnergyPerMass;
  output.nanostructurePairEnergyPerVolume = nanostructurePairEnergyPerVolume;

  output.chipEnergyPerMass = chipEnergyPerMass;
  output.chipEnergyWattHoursPerKilogram = chipEnergyWattHoursPerKilogram;
  output.chipEnergyPerVolume = chipEnergyPerVolume;
  output.chipEnergyWattHoursPerMetersCubed = chipEnergyWattHoursPerMetersCubed;

  output.chipEnergyWattHoursPerLiter = chipEnergyWattHoursPerLiter;

  console.log('experiment happened');
  console.log(output);

  return output;
};
