/** eslint-disable react/jsx-closing-tag-location */
/** eslint-disable react/jsx-closing-tag-location */
import classes from './People.module.css';

interface PeopleData {
  name: string;
  image: string;
  teams: string;
  blurb: string;
}

// TODO: Sort people by seniority and add past members to PeoplePage.tsx
const people: PeopleData[] = [
  {
    name: "Mateusz Czajka",
    image: "<a href=\"https://ibb.co/K5P98rv\"><img src=\"https://i.ibb.co/wdkK2zm/happymatty-min.jpg\" alt=\"happymatty-min\" border=\"0\"></a>",
    teams: "Nanofab, Energy Storage, E-beam lithography, Biosensing",
    blurb: "I fabricate chips with CNTs and optimize the performance of the CNT-based devices we create. Additionally, I mentor and guide students within the research team on microfabrication, electronics, theoretical analysis and experimental methodology."
  },
  {
    name: "Anthony Pentrack",
    image: "<a href=\"https://ibb.co/VHdzQGj\"><img src=\"https://i.ibb.co/VHdzQGj/Best-one.jpg\" alt=\"Best-one\" border=\"0\"></a>",
    teams: "Biosensing",
    blurb: "I am working on many projects within the biosensing team including the quantification of our functionalized CNT's, running electrochemical impedance spectroscopy tests to determine concentrations based on impedance changes, designing and creating microfluidic devices through photolithography and soft lithography, and performing COMSOL analyses on our CNT chips."
  },
  {
    name: "Su Kyung Lee",
    image: "<a href=\"https://ibb.co/b7m66Bp\"><img src=\"https://i.ibb.co/GFpdd2g/IMG-2652-2.jpg\" alt=\"IMG-2652-2\" border=\"0\" /></a>",
    teams: "Biosensing, Energy Storage",
    blurb: "For the biosensing team, I design and fabricate microfluidic devices, run electrochemical impedance spectroscopy tests, and conduct stress analysis of CNTs on COMSOL. I also work on all stages of microfabrication from mask design, photolithography, SEM imaging, and wafer dicing for BioMEMS applications."
  },
  {
    name: "Aryeetey Dalil Ashong",
    image: "<a href=\"https://ibb.co/ygp1HPJ\"><img src=\"https://i.ibb.co/qmCfTjw/ARYEETEY-DALIL-ASHONG.jpg\" alt=\"ARYEETEY-DALIL-ASHONG\" border=\"0\"></a>",
    teams: "Design",
    blurb: "Working with UCSF to create a low-cost Perinatal Dialysis machine for pediatrics"
  },
  {
    name: "Sasha Lamot",
    image: "<a href=\"https://ibb.co/T84XPLX\"><img src=\"https://i.ibb.co/Ltxw95w/Nano-Tech-picutre.jpg\" alt=\"Nano-Tech-picutre\" border=\"0\"></a>",
    teams: "E-Beam Lithography",
    blurb: "Working in the e-beam lithography project. Focusing on building the GUI to simulate e-beam lithography and connecting the software to the hardware."
  },
  {
    name: "Omer Ahmer",
    image: "<a href=\"https://ibb.co/NxC9QV0\"><img src=\"https://i.ibb.co/nrm7ZgX/8d6fed87-2e30-4021-bae6-8de8ce4c78a9.jpg\" alt=\"8d6fed87-2e30-4021-bae6-8de8ce4c78a9\" border=\"0\"></a>",
    teams: "Software, E-Beam Lithography",
    blurb: "I am working on revamping the website and adding features, as well as fixing the USB communication between the CNT's and the controllers."
  },
  {
    name: "Humayd Zameer",
    image: "<a href=\"https://ibb.co/dKtm1Vq\"><img src=\"https://i.ibb.co/dKtm1Vq/DSC02124.jpg\" alt=\"DSC02124\" border=\"0\"></a>",
    teams: "Biosensing, E-Beam Lithography",
    blurb: "Helped test biosensing chips last sem, am currently working with the E-beam team and improving my coding skills. I am also working on threading the Wire Bonder"
  },
  {
    name: "August Nguyen",
    image: "<a href=\"https://ibb.co/vddj1wZ\"><img src=\"https://i.ibb.co/jwwrh6g/21-A78-EF2-3-CEC-4678-BD6-D-38-E419-AD4389.jpg\" alt=\"21-A78-EF2-3-CEC-4678-BD6-D-38-E419-AD4389\" border=\"0\"></a>",
    teams: "Biosensing",
    blurb: "Run functionalization quantization procedure to determine the concentration through a low-pass filter by measuring the impedence"
  },
  {
    name: "Achyut S. Chebiyam",
    image: "<a href=\"https://ibb.co/HtwHJL9\"><img src=\"https://i.ibb.co/m9ZcxrP/Chebiyam-Picture.jpg\" alt=\"Chebiyam-Picture\" border=\"0\"></a>",
    teams: "E-Beam Lithography, AR Glasses, Software",
    blurb: "I am developing software to implement an e-beam lithography simulation system. I am additionally spearheading the AR glasses project to cater to stroke victims."
  },
  {
    name: "Anikait Paliwal",
    image: "<a href=\"https://ibb.co/2jdx8MR\"><img src=\"https://i.ibb.co/hKVbXdr/researchpic.jpg\" alt=\"researchpic\" border=\"0\"></a>",
    teams: "E-Beam Lithography, AR Glasses, Software",
    blurb: "I am developing software to implement an e-beam lithography simulation system. I am additionally spearheading the AR glasses project to cater to stroke victims."
  },


  {
    name: "Caroline Chen",
    image: "<a href=\"https://ibb.co/pdbtHSR\"><img src=\"https://i.ibb.co/m4bLn3X/Wechat-IMG189.jpg\" alt=\"Wechat-IMG189\" border=\"0\" /></a>",
    teams: "Energy Storage",
    blurb: "I work on characterizing performance parameters of the CNT-based capacitor and investigating E-field-induced dielectric changes in nanolaminates."
  },
  {
    name: "Ellie Zuo",
    image: "",
    teams: "Hardware",
    blurb: "I work on building and maintaining our team's infrastructure, and help investigate and design solutions such as compute servers and alternative SBC platforms that will faciliate a more flexible approach to research."
  },
  {
    name: "Sanchay Gadia",
    image: "<a href=\"https://ibb.co/vQSWXyH\"><img src=\"https://i.ibb.co/z7zg69r/20230329-190810.jpg\" alt=\"20230329-190810\" border=\"0\"></a>",
    teams: "Energy Storage",
    blurb: "I work on fabricating the nanocapacitors and the CNT chips. I also perform chip testing to analyze our dielectric and device performance while investigating molecular changes in the nanolaminates which provides us with the superior dielectric constant."
  },
  {
    name: "Shalen Ardeshna",
    image: "<a href=\"https://ibb.co/DYJC0JL\"><img src=\"https://i.ibb.co/DYJC0JL/IMG-7458.jpg\" alt=\"IMG-7458\" border=\"0\"></a>",
    teams: "Design",
    blurb: "I work on the manifold design for functionalization of our chips as well as help with the design of our microfluidics pump to test the performance of our microfludic devices."
  },

  {
    name: "Shankar Subramaniam",
    image: "<a href=\"https://ibb.co/dB1Vjsg\"><img src=\"https://i.ibb.co/VVrzJ0m/Shankar-pic.jpg\" alt=\"Shankar-pic\" border=\"0\"></a><br />",
    teams: "Energy Storage",
    blurb: "I am a Materials Science and Engineering major working on developing theoretical models to investigate dielectrics of nanolaminates for carbon-nanotube based capacitors and model the relationship between the arrangement of the dielectric layers and the dielectric constant of the material."
  },
  {
    name: "Sabrina Fang",
    image: "<a href=\"https://ibb.co/vQ8YKqT\"><img src=\"https://i.ibb.co/yYJSbPZ/IMG-3309.jpg\" alt=\"IMG-3309\" border=\"0\"></a>",
    teams: "Biosensing",
    blurb: "I am a bioengineering student working in the functionalization team, assisting with the quantification and analysis of functionalized CNTs."
  },

  {
    name: "Emma Horne",
    image: "<a href=\"https://ibb.co/xhbZwk8\"><img src=\"https://i.ibb.co/9n0PBD3/Emma-Horne-38.jpg\" alt=\"Emma-Horne-38\" border=\"0\" /></a>",
    teams: "Biosensing",
    blurb: "I'm a bioengineering student, part of the biosensing team. I'm working in the functionalization team, assisting with the quantification and analysis of functionalized CNTs."
  },
  {
    name: "Jasraj Dhillon",
    image: "",
    teams: "E-Beam Lithography, Fabrication",
    blurb: ""
  },
  {
    name: "Mansoor Mamnoon",
    image: "<a href=\"https://ibb.co/zf6xxb6\"><img src=\"https://i.ibb.co/bdbmmLb/Mamnoon-Mansoor-Image.jpg\" alt=\"Mamnoon-Mansoor-Image\" border=\"0\" /></a>",
    teams: "Design",
    blurb: "I am working on the design team to develop an electrochemical camera using CAD software that can handle data from 256 channels simultaneously. Specifically, I am setting up the electronics to design this camera."
  },
  {
    name: "Ziheng Tang",
    image: "",
    teams: "Design",
    blurb: ""
  },
  {
    name: "Jess Sanchez",
    image: "<a href=\"https://ibb.co/Xk2h298\"><img src=\"https://i.ibb.co/7NYwYH4/IMG-0770.jpg\" alt=\"IMG-0770\" border=\"0\"></a>",
    teams: "Cognition, Business",
    blurb: "I am initiating research on cognitive neuroscience methods and finding a way to integrate them into the current technology with the hopes of tracking relevant biomarkers, brain waves, and other variables. Additionally, performing market analysis on e-beam lithography."
  },
  {
    name: "Vivian Huang",
    image: "",
    teams: "Biosensing, comsol",
    blurb: ""
  },
  {
    name: "Raymond Lin",
    image: "<a href=\"https://ibb.co/bKGW7tB\"><img src=\"https://i.ibb.co/fxT1QJp/Screenshot-2024-03-10-at-11-56-32-PM.png\" alt=\"Screenshot-2024-03-10-at-11-56-32-PM\" border=\"0\"></a>",
    teams: "E-Beam Lithography",
    blurb: "I am focused upon building the Python GUI that creates a simulation of the e-beam lithography while also connecting the software to the hardware."
  },
  {
    name: "Seoyun Kim",
    image: "<a href=\"https://ibb.co/tLJ7KW3\"><img src=\"https://i.ibb.co/5KRN4f2/IMG-0878-2.jpg\" alt=\"IMG-0878-2\" border=\"0\"></a>",
    teams: "Energy Storage",
    blurb: "I work on testing and developing theoretical models to investigate the functionality of the chips. I conduct tests to analyze the performance and calculate the bending of the electric field at the interface of the two layers of dielectric and relate it to the applied electric field and charge on the three electrodes."
  },
  {
    name: "Brandon Wong",
    image: "",
    teams: "Design",
    blurb: "Prototype, design, and manufactures components for muscle mechanotherapy device, as well as vacuum chamber system components."
  },
  {
    name: "Euijn Ryu",
    image: "",
    teams: "Biosensing",
    blurb: "I am in the biosensing team working on the quantification of the functionalized CNT."
  },
  {
    name: "Yunzhi Lin",
    image: "<a href=\"https://ibb.co/ZY1kWv0\"><img src=\"https://i.ibb.co/ZY1kWv0/IMG-0127.jpg\" alt=\"IMG-0127\" border=\"0\"></a>",
    teams: "Biosensing - COMSOL, Microfludics",
    blurb: "Refining microfluidic device fabrication techniques, and optimizing molds for casting PDMS microfluidic devices to enhance efficiency. Using COMSOL to simulate forces on carbon nanotube structures during wash steps and investigate ideal nanotube spacing for electrochemical impedance spectroscopy."
  },
  {
    name: "Evan Wong",
    image: "<a href=\"https://ibb.co/sm9GWYm\"><img src=\"https://i.ibb.co/dW4qmYW/20231004-Headshot-AVL-5045.jpg\" alt=\"20231004-Headshot-AVL-5045\" border=\"0\"></a>",
    teams: "Design, Business",
    blurb: "I'm working on the design team to develop an effective wiring harness for server and exoskeleton use. Additionally, I'm working on market analysis for the E-Beam Lithography project."
  },
  {
    name: "Vedant Agarwal",
    image: "",
    teams: "E-Beam Lithography",
    blurb: ""
  },
  {
    name: "Zoe Tenenbaum",
    image: "<a href=\"https://ibb.co/WzN9k0q\"><img src=\"https://i.ibb.co/WzN9k0q/zoetenenbaum.png\" alt=\"zoetenenbaum\" border=\"0\"></a>",
    teams: "Fabrication",
    blurb: ""
  },
  {
    name: "ChenYou Tang",
    image: "<a href=\"https://ibb.co/B6XNZ4r\"><img src=\"https://i.ibb.co/B6XNZ4r/IMG-2461.jpg\" alt=\"IMG-2461\" border=\"0\"></a>",
    teams: "Energy Storage",
    blurb: ""
  },
  {
    name: "Kayson Yao",
    image: "",
    teams: "Business",
    blurb: ""
  },
  {
    name: "Ji Choi",
    image: "<a href=\"https://ibb.co/DK6r9Vh\"><img src=\"https://i.ibb.co/f0KDk1f/IMG-9243.jpg\" alt=\"IMG-9243\" border=\"0\" /></a>",
    teams: "Design - Exo skeleton",
    blurb: "I am currently working on Exo-Skeleton, Ankle. Researching and trying to manufacture a exo-skeleton for Professor Waqas's Father."
  },
  {
    name: "Dennis Li",
    image: "",
    teams: "Fabrication",
    blurb: ""
  },
  {
    name: "Deven Bibikar",
    image: "",
    teams: "Software",
    blurb: ""
  },
  {
    name: "Joshua Sundjojo",
    image: "<a href=\"https://ibb.co/tXNNSqy\"><img src=\"https://i.ibb.co/m8YYm9Q/Whats-App-Image-2024-02-29-at-11-58-38-221d7df8.jpg\" alt=\"Whats-App-Image-2024-02-29-at-11-58-38-221d7df8\" border=\"0\" /></a>",
    teams: "Biosensing",
    blurb: "I help conduct and troubleshoot tests on the microfluidics system, then analyze the data to get a standard result for future tests in the electrical impedance spectroscopy team"
  },
  {
    name: "Nykole Liu",
    image: "",
    teams: "Energy Storage",
    blurb: ""
  },
  {
    name: "Charlotte Law",
    image: "<a href=\"https://imgbb.com/\"><img src=\"https://i.ibb.co/4F5XN8R/1691974393573.jpg\" alt=\"1691974393573\" border=\"0\"></a>",
    teams: "COMSOL Analysis",
    blurb: ""
  },
  {
    name: "Kinjal Govil",
    image: "<a href=\"https://ibb.co/fDBsC7m\"><img src=\"https://i.ibb.co/1zhk9xH/Screenshot-2024-03-16-at-4-08-42-PM.png\" alt=\"Screenshot-2024-03-16-at-4-08-42-PM\" border=\"0\"></a>",
    teams: "Energy Storage",
    blurb: "I work on using machine learning to predict the dielectric property of materials to optimize the discovery of new capacitors."
  },
  {
    name: "Samantha Lee",
    image: "",
    teams: "Business",
    blurb: ""
  },
  {
    name: "Laila Shaikh",
    image: "<a href=\"https://ibb.co/GHgLgMN\"><img src=\"https://i.ibb.co/5Kqyqjw/LS-portrait.jpg\" alt=\"LS-portrait\" border=\"0\"></a>",
    teams: "Biosensing, Functionalization",
    blurb: "I am assisting with the quantification of functionalized CNTs"
  },
  {
    name: "",
    image: "",
    teams: "",
    blurb: ""
  },
  {
    name: "Jiahua Lu",
    image: "",
    teams: "Energy Storage",
    blurb: ""
  },
  {
    name: "Darian Garcia",
    image: "",
    teams: "Energy Storage",
    blurb: "I am a part of the theoretical energy storage team; analyzing dielectric layers of the chips, and investigating the bending of molecules based on the applied electric field."
  },
  {
    name: "Daniel Kaganovich",
    image: "",
    teams: "Biosensing",
    blurb: "I am working on obtaining and analyzing electrochemical impedance data using the microfluidics system"
  },
  {
    name: `[^"]*`,
    image: "",
    teams: "Fabrication",
    blurb: ""
  },

  {
    name: "Waqas Khalid",
    image: "<a href=\"https://ibb.co/kXqcp1Z\"><img src=\"https://i.ibb.co/bXNdxJt/waqas.jpg\" alt=\"waqas\" border=\"0\"></a>",
    teams: "",
    blurb: ""
  },
  {
    name: "Seong Hyun Park",
    image: "",
    teams: "Software, E-beam Lithography",
    blurb: ""
  },

  {
    name: "Daniel Lin",
    image: "",
    teams: "Software, E-beam Lithography",
    blurb: ""
  },
  {
    name: "Dana Kim",
    image: "",
    teams: "Software, E-beam Lithography",
    blurb: ""
  },
  {
    name: "Talha Ijaz",
    image: "<a href=\"https://ibb.co/V3Wt2gX\"><img src=\"https://i.ibb.co/TrBkm4z/TAL00197.jpg\" alt=\"TAL00197\" border=\"0\"></a>",
    teams: "Software",
    blurb: ""
  },
  {
    name: "Erin Kwon",
    image: "<a href=\"https://ibb.co/6ZhG61f\"><img src=\"https://i.ibb.co/DbXm38S/IMG-5515.jpg\" alt=\"IMG-5515\" border=\"0\" /></a>",
    teams: "Design",
    blurb: ""
  },
  {
    name: "Alanood Almarri",
    image: "<a href=\"https://ibb.co/7t8b3fp\"><img src=\"https://i.ibb.co/d417NTp/IMG-4471.jpg\" alt=\"IMG-4471\" border=\"0\" /></a>",
    teams: "Biosensing",
    blurb: ""
  },
  {
    name: "Catherine Tran",
    image: "<a href=\"https://ibb.co/crg2cxy\"><img src=\"https://i.ibb.co/HHFGDXK/IMG-9105.jpg\" alt=\"IMG-9105\" border=\"0\"></a>",
    teams: "Biosensing",
    blurb: ""
  }
];

const principalInvestigator = people.find((person) => person.name === 'Waqas Khalid');
const otherResearchers = people.filter((person) => person.name !== 'Waqas Khalid');

const PeoplePage: React.FC = () => (
  <div className={`${classes.textCenter} ${classes.fontLink}`}>
    <div className={classes.container}>
      <h1 className={classes.heading}>Meet the researchers of the Nanotechnology Laboratory!</h1>

      {/* Principal Investigator Row */}
      {principalInvestigator && (
        <div className={`${classes.row} ${classes.personContainer}`}>
          <div className={classes.col12}>
            <div className={classes.personInfo}>
              <div
                className={classes.peopleImage}
                dangerouslySetInnerHTML={{
                  __html: principalInvestigator.image,
                }}
              // eslint-disable-next-line react/jsx-closing-tag-location
              ></div>
              <h5 className={classes.text3xl}>{principalInvestigator.name}</h5>
              <p className={classes.fontItalic}>Principal Investigator</p>
            </div>
          </div>
        </div>
      )}

      {/* Other Researchers - Fixed Columns */}
      <div className={classes.row}>
        {otherResearchers.map((person, index) =>
          person.image && person.name && person.teams ? (
            <div key={index} className={classes.colMd4}>
              <div className={classes.personContainer}>
                <div
                  className={classes.peopleImage}
                  dangerouslySetInnerHTML={{ __html: person.image }}
                // eslint-disable-next-line react/jsx-closing-tag-location
                ></div>
                <div className={classes.personInfo}>
                  <span className={classes.text3xl}>{person.name}</span>
                  <p>{person.blurb}</p>
                  <p className={classes.fontItalic}>Team(s): {person.teams}</p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      <p>
        Click{' '}
        <a className={classes.link} href="/PeopleArchive">
          here
        </a>{' '}
        to add your information to the website!
      </p>
    </div>
  </div>
);

export default PeoplePage;
