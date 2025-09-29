export type AssetType = "pdf" | "image";

export type Certificate = {
    id: string;
    title: string;
    issuer: string;
    date: string;
    assetType: AssetType;
    assetUrl: string;
    verifyUrl?: string;
    thumbUrl?: string;
    description?:string;
}

export const certificates: Certificate[] = [
{
    id: "ibm-data-analyst",
    title: "IBM Data Analyst",
    issuer: "Coursera",
    date: "2023-09-13",
    assetType: "pdf",
    assetUrl: "assets/certificates/ibm-data-analyst.pdf",
    thumbUrl: "assets/certificates/ibm-data-analyst.png", 
    verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/GDFEJFNWV4M8",
    description: "Completed the IBM Data Analyst Professional Certificate on Coursera, a 9-course program covering core topics in data analytics. Gained hands-on experience with data analysis tools and techniques, including Excel, SQL, Python, Jupyter Notebooks, and Cognos Analytics. Developed skills in data visualization, dashboard creation, and real-world data analysis, preparing for entry-level data analytics roles.",
},
{
    id: "idtech-ml",
    title: "Python Coding: Machine Learning and Data Science",
    issuer: "The Univeristy of Pennsylvania Arts & Sciences High School Programs in collaboration with iD Tech",
    date: "2022-07-29",
    assetType: "pdf",
    assetUrl: "assets/certificates/id-tech-machine-learning-and-data-science.pdf",
    thumbUrl: "assets/certificates/id-tech-machine-learning-and-data-science.png",
    verifyUrl: "https://images.credential.net/embed/02ybwvtu_1743533401973.png",
    description: "Completed Python Coding: Machine Learning and Data Science program through the University of Pennsylvania Arts & Sciences High School Programs in collaboration with iD Tech. Gained foundational and intermediate skills in Python programming, data analysis, and machine learning concepts, including supervised and unsupervised learning, model evaluation, and real-world dataset applications.",
},
{
     id: "flex",
    title: "FLEX: Future Leaders Excange Program",
    issuer: "The U.S. Department of State",
    date: "2023-05-30",
    assetType: "pdf",
    assetUrl: "assets/certificates/flex.pdf",
    thumbUrl: "assets/certificates/flex.png",
    description: "Awarded a U.S. Department of State Future Leaders Exchange (FLEX) Program scholarship, spending an academic year in the United States to build cross-cultural understanding, leadership skills, and community engagement."
}
]