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
    date: "2025-09-13",
    assetType: "pdf",
    assetUrl: "/public/assets/certificates/ibm-data-analyst.pdf",
    thumbUrl: "/public/assets/certificates/ibm-data-analyst.png", 
    verifyUrl: "https://www.coursera.org/account/accomplishments/professional-cert/GDFEJFNWV4M8",
    description: "Completed the IBM Data Analyst Professional Certificate on Coursera, a 9-course program covering core topics in data analytics. Gained hands-on experience with data analysis tools and techniques, including Excel, SQL, Python, Jupyter Notebooks, and Cognos Analytics. Developed skills in data visualization, dashboard creation, and real-world data analysis, preparing for entry-level data analytics roles.",
},
{
    id: "idtech-ml",
    title: "Python Coding: Machine Learning and Data Science",
    issuer: "The Univeristy of Pennsylvania Arts & Sciences High School Programs in collaboration with iD Tech",
    date: "2023-07-29",
    assetType: "pdf",
    assetUrl: "/public/assets/certificates/id-tech-machine-learning-and-data-science.pdf",
    thumbUrl: "/public/assets/certificates/id-tech-machine-learning-and-data-science.png",
    verifyUrl: "https://images.credential.net/embed/02ybwvtu_1743533401973.png",
    description: "Completed Python Coding: Machine Learning and Data Science program through the University of Pennsylvania Arts & Sciences High School Programs in collaboration with iD Tech. Gained foundational and intermediate skills in Python programming, data analysis, and machine learning concepts, including supervised and unsupervised learning, model evaluation, and real-world dataset applications.",
},
{
    id: "idtech-m1l",
    title: "Python Coding: Machine Learning and Data Science",
    issuer: "The Univeristy of Pennsylvania Arts & Sciences High School Programs in collaboration with iD Tech",
    date: "2023-07-29",
    assetType: "pdf",
    assetUrl: "/public/assets/certificates/id-tech-machine-learning-and-data-science.pdf",
    thumbUrl: "/public/assets/certificates/id-tech-machine-learning-and-data-science.png",
    verifyUrl: "https://images.credential.net/embed/02ybwvtu_1743533401973.png",
    description: "Completed course in machine learning and data science",
}
]