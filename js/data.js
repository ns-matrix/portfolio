/**
 * PORTFOLIO DATA SOURCE OF TRUTH — NITIN SINGH
 * Strictly verified data extracted from academic transcripts, professional certifications,
 * project repositories, and documented experience.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Nitin Singh",
    officialName: "Singh Nitin Kumar Chakradhar Radha",
    title: "Data Scientist & AI / LLM Engineer",
    roles: [
      "Data Scientist",
      "AI & LLM Developer",
      "Apprentice @ National Stock Exchange (NSE)",
      "Machine Learning Practitioner"
    ],
    tagline: "Engineering quantized neural conversational agents, predictive machine learning pipelines, and financial analytics systems.",
    location: "Powai, Mumbai, Maharashtra, India",
    email: "ns077751@gmail.com",
    github: "https://github.com/ns-matrix",
    linkedin: "https://www.linkedin.com/in/nitin-kumar-singh-339210262/",
    googleDev: "https://developers.google.com/profile/u/nxmatrix",
    avatar: "assets/profile/avatar.webp",
    statusText: "Available for High-Impact AI & Data Science Opportunities",
    aboutBio: [
      "I am an ambitious Data Scientist and AI Developer pursuing a B.Sc. in Data Science at the University of Mumbai (SGPI: 8.58). Currently, I am expanding my domain expertise as an Apprentice at the National Stock Exchange of India (NSE) under the National Apprenticeship Training Scheme (NATS).",
      "My technical journey bridges deep theory with production engineering. I build practical, real-world solutions ranging from quantized 4-bit conversational LLMs running on constrained GPU hardware (PersonaPlex 7B) to end-to-end predictive machine learning web applications analyzing primary consumer survey datasets (EcomIQ).",
      "I believe in data integrity, architectural efficiency, and verifiable technical craftsmanship. Constantly experimenting with vector databases, agentic workflows, and predictive modeling, I build software that transforms complex data into clear, actionable intelligence."
    ],
    highlights: [
      { label: "Location", value: "Powai, Mumbai, India" },
      { label: "Education", value: "B.Sc. Data Science (SGPI: 8.58)" },
      { label: "Affiliation", value: "National Stock Exchange (NSE) Apprentice" },
      { label: "Focus", value: "LLMs, Quantization, Machine Learning & Analytics" }
    ]
  },

  metrics: [
    {
      value: "8.58",
      suffix: " SGPI",
      label: "Academic Excellence",
      description: "Consistent high performance across B.Sc. Data Science Semesters I–IV"
    },
    {
      value: "12",
      suffix: "+",
      label: "Verified Credentials",
      description: "Industry certifications in Python, ML, Power BI, CyberOps & Analytics"
    },
    {
      value: "4",
      suffix: "+",
      label: "Core AI & ML Systems",
      description: "Production LLM quantization, survey analytics, ML classifiers & vector search"
    },
    {
      value: "300",
      suffix: "+",
      label: "Survey Data Points",
      description: "Primary consumer responses captured & modeled for E-Commerce analytics"
    }
  ],

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "ai-ml", label: "AI & Machine Learning" },
      { id: "data-analytics", label: "Data Science & Analytics" },
      { id: "backend-db", label: "Backend & Databases" },
      { id: "devops-tools", label: "DevOps & Infrastructure" }
    ],
    items: [
      // AI & ML
      { name: "Large Language Models (LLMs)", category: "ai-ml", level: "Advanced", tags: ["Hugging Face", "Transformers", "Gradio", "Colab T4"] },
      { name: "Model Quantization (4-bit/8-bit)", category: "ai-ml", level: "Specialist", tags: ["bitsandbytes", "VRAM Optimization", "Inference"] },
      { name: "Machine Learning Algorithms", category: "ai-ml", level: "Advanced", tags: ["Scikit-Learn", "Random Forest", "SVM", "KNN", "LogReg"] },
      { name: "Vector Search & Embeddings", category: "ai-ml", level: "Proficient", tags: ["Qdrant", "Sentence Transformers", "Semantic Search"] },
      { name: "Prompt Engineering & Agents", category: "ai-ml", level: "Proficient", tags: ["System Design", "Context Windows", "Evaluation"] },

      // Data Science & Analytics
      { name: "Python for Data Science", category: "data-analytics", level: "Expert", tags: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn"] },
      { name: "R Programming", category: "data-analytics", level: "Intermediate", tags: ["Statistical Analysis", "Data Modeling", "GGPlot2"] },
      { name: "Power BI & Dashboarding", category: "data-analytics", level: "Advanced", tags: ["DAX", "Data Modeling", "Executive KPIs", "ETL"] },
      { name: "Tableau Analytics", category: "data-analytics", level: "Intermediate", tags: ["Visual Analytics", "Calculated Fields", "Storyboards"] },
      { name: "Primary Survey Research & EDA", category: "data-analytics", level: "Advanced", tags: ["Survey Design", "Hypothesis Testing", "Data Cleansing"] },
      { name: "Advance Excel & Word (72 Hrs Certified)", category: "data-analytics", level: "Expert", tags: ["VLOOKUP/XLOOKUP", "Pivot Tables", "Nested Formulas"] },

      // Backend & Databases
      { name: "FastAPI & RESTful APIs", category: "backend-db", level: "Proficient", tags: ["Pydantic", "Async", "Uvicorn", "API Docs"] },
      { name: "PostgreSQL & Supabase", category: "backend-db", level: "Proficient", tags: ["Relational Schema", "Foreign Keys", "SQL Queries"] },
      { name: "Flask & Web Frameworks", category: "backend-db", level: "Intermediate", tags: ["MVC", "Routing", "Jinja2"] },
      { name: "Streamlit Cloud Deployment", category: "backend-db", level: "Advanced", tags: ["Interactive Dashboards", "Session State", "Reactive UI"] },

      // DevOps & Tools
      { name: "Git & GitHub Version Control", category: "devops-tools", level: "Advanced", tags: ["Branching", "Pull Requests", "CI/CD Ready"] },
      { name: "Linux & Bash Scripting", category: "devops-tools", level: "Proficient", tags: ["Shell Automation", "File Systems", "Permissions"] },
      { name: "VMware & Virtualization", category: "devops-tools", level: "Intermediate", tags: ["Virtual Machines", "Isolated Sandboxes"] },
      { name: "CyberOps & Security Fundamentals", category: "devops-tools", level: "Certified", tags: ["Network Security", "Threat Detection", "Access Control"] }
    ]
  },

  projects: [
    {
      id: "personaplex-7b",
      title: "PersonaPlex 7B (4-bit)",
      subtitle: "Voice & Text Conversational AI on Constrained Hardware",
      badge: "Flagship AI Project",
      category: "ai-ml",
      image: "assets/projects/personaplex.webp",
      shortDescription: "A full-fledged conversational AI system combining voice input and quantized 7B LLM inference running on a free-tier Google Colab T4 GPU (16GB VRAM limit).",
      tags: ["Python", "Hugging Face", "bitsandbytes", "Transformers", "Gradio", "PyTorch"],
      liveUrl: "https://ns-matrix-personaplex7b-4-bit.netlify.app",
      githubUrl: "https://github.com/ns-matrix",
      stats: [
        { label: "Quantization", value: "4-bit NF4" },
        { label: "VRAM Footprint", value: "< 5.8 GB" },
        { label: "Inference Platform", value: "T4 GPU" },
        { label: "Modalities", value: "Voice + Text" }
      ],
      caseStudy: {
        problem: "Running advanced 7-billion parameter language models locally or in low-cost cloud environments typically requires expensive enterprise GPUs with 24GB+ VRAM, making interactive AI voice applications cost-prohibitive for students and independent developers.",
        architecture: "Leveraged bitsandbytes NF4 4-bit quantization with double quantization and 16-bit compute dtype (bfloat16). Configured Hugging Face Transformers pipeline with custom device map routing. Integrated Gradio audio recording blocks with dynamic Whisper-style speech processing and streaming text generation to achieve low latency response times.",
        keyFeatures: [
          "4-bit NormalFloat (NF4) quantization reducing 14GB 16-bit model weight footprint to under 5.8GB",
          "Interactive Web interface built with Gradio and deployed with Netlify frontend integration",
          "Full multimodal pipeline supporting natural voice inputs and rich textual conversational outputs",
          "Custom system prompt grounding ensuring coherent persona maintenance across multi-turn dialogues"
        ],
        results: "Successfully maintained near-baseline 16-bit perplexity while enabling 100% interactive responsiveness on a standard free-tier Google Colab T4 GPU without memory overflow."
      }
    },
    {
      id: "ecomiq-analytics",
      title: "EcomIQ — Predictive E-Commerce Analytics",
      subtitle: "Consumer Behavior Modeling & Machine Learning Classification",
      badge: "Data Science & ML",
      category: "data-analytics",
      image: "assets/projects/ecomiq.webp",
      shortDescription: "End-to-end data science study analyzing consumer shopping drivers across 300+ surveyed respondents, comparing multiple ML classification algorithms and deployed on Streamlit Cloud.",
      tags: ["Python", "Streamlit", "Scikit-Learn", "Pandas", "Seaborn", "Survey Analytics"],
      liveUrl: "https://github.com/ns-matrix",
      githubUrl: "https://github.com/ns-matrix",
      stats: [
        { label: "Dataset Scale", value: "300+ Responses" },
        { label: "Top Accuracy", value: "92.23%" },
        { label: "Best Model", value: "Random Forest" },
        { label: "App Deployment", value: "Streamlit Cloud" }
      ],
      caseStudy: {
        problem: "Modern e-commerce platforms struggle to understand which factors (discounts, delivery speed, customer reviews, product diversity) decisively influence repeat buying behavior among college-educated and young urban consumers in India.",
        architecture: "Designed and distributed a rigorous primary survey across 300+ verified respondents. Engineered an automated ETL pipeline (`Google_Form_Automation.py`, `Survey_AutoFill.py`) to validate and structure incoming data. Applied one-hot encoding, missing value imputation, and feature importance weighting. Evaluated Logistic Regression (89.19%), Decision Tree (92.20%), and Random Forest (92.23%).",
        keyFeatures: [
          "Primary data collection spanning demographics, purchase frequency, trust factors, and discount sensitivity",
          "Comparative ML model benchmarking with cross-validation, confusion matrices, and ROC-AUC curves",
          "Interactive multi-page Streamlit web dashboard allowing stakeholders to simulate consumer profile outcomes",
          "Automated survey data validation scripts ensuring zero duplicate or corrupt inputs"
        ],
        results: "Delivered 92.23% classification accuracy in predicting purchase intent, revealing that delivery transparency and customer reviews have 1.8x stronger correlation with brand loyalty than pure discounts."
      }
    },
    {
      id: "movie-success-prediction",
      title: "Movie Success Prediction & ROI Analysis",
      subtitle: "Supervised Learning & Interactive Tableau Executive Dashboard",
      badge: "Predictive Modeling",
      category: "data-analytics",
      image: "assets/projects/movie_analytics.webp",
      shortDescription: "Statistical modeling pipeline and interactive Tableau storyboard analyzing historical film metadata to predict box office success tiers and optimal production budget allocations.",
      tags: ["Python", "Tableau", "KNN", "SVM", "Scikit-Learn", "Feature Engineering"],
      liveUrl: "https://github.com/ns-matrix",
      githubUrl: "https://github.com/ns-matrix",
      stats: [
        { label: "Algorithms", value: "KNN & SVM" },
        { label: "Dashboard", value: "Tableau Public" },
        { label: "Features", value: "Budget, Genre, Cast" },
        { label: "Analysis", value: "ROI Optimization" }
      ],
      caseStudy: {
        problem: "Film studio producers and investors face multi-million dollar risks due to unpredictable box office performance. Identifying key early predictors of profitability before production greenlights is crucial.",
        architecture: "Extracted and cleaned extensive historical IMDb and Kaggle movie datasets. Handled skewness in production budget and box office grosses using log transformations. Trained K-Nearest Neighbors (KNN) and Support Vector Machines (SVM) classifiers to categorize films into Flop, Moderate, and Blockbuster classes. Designed interactive Tableau dashboards for executive scenario modeling.",
        keyFeatures: [
          "Advanced data wrangling handling inflation-adjusted budgets, international revenues, and genre one-hot encodings",
          "Non-linear decision boundaries mapped via Support Vector Machines with RBF kernel",
          "Interactive Tableau dashboard enabling dynamic filtering by release window, rating, and runtime",
          "Actionable budget allocation recommendations maximizing expected Return on Investment (ROI)"
        ],
        results: "Achieved robust classification separation across revenue brackets, proving that optimal release timing and genre synergy outweigh raw celebrity casting budgets in determining ROI."
      }
    },
    {
      id: "local-ai-infrastructure",
      title: "Local AI Assistant & Dev Infrastructure",
      subtitle: "Private Vector Search & Self-Hosted Intelligence Architecture",
      badge: "Backend & Systems",
      category: "backend-db",
      image: "assets/projects/local_ai.webp",
      shortDescription: "Self-hosted retrieval and inference pipeline integrating local LLMs with Qdrant vector database, FastAPI microservices, and Supabase PostgreSQL for private document intelligence.",
      tags: ["FastAPI", "Qdrant", "Ollama", "PostgreSQL", "Supabase", "Docker / Linux"],
      liveUrl: "https://github.com/ns-matrix",
      githubUrl: "https://github.com/ns-matrix",
      stats: [
        { label: "Vector DB", value: "Qdrant" },
        { label: "API Framework", value: "FastAPI" },
        { label: "Inference", value: "Local Ollama" },
        { label: "Privacy", value: "100% Air-Gapped" }
      ],
      caseStudy: {
        problem: "Transmitting confidential internal notes, academic papers, and proprietary code to public cloud AI APIs poses severe privacy, cost, and compliance hazards.",
        architecture: "Engineered an on-premise Retrieval-Augmented Generation (RAG) backend utilizing FastAPI. Chunked documents using semantic recursive splitters, embedded vectors with localized embedding models, and indexed them inside high-speed Qdrant vector storage. Coordinated local inference via Ollama with structured chat histories persisted in Supabase PostgreSQL.",
        keyFeatures: [
          "Zero external data leakage with completely localized embedding and LLM generation loop",
          "Sub-100ms vector semantic search retrieval through Qdrant HNSW indexing",
          "Asynchronous FastAPI endpoints supporting streaming responses and SSE (Server-Sent Events)",
          "Cross-platform execution tested across Linux environments and virtualized developer sandboxes"
        ],
        results: "Provided a turnkey personal AI workstation capable of querying hundreds of academic papers with precise source citations and zero cloud API charges."
      }
    }
  ],

  experience: [
    {
      role: "Apprentice / Intern — Financial Analytics & Operational Systems",
      organization: "National Stock Exchange of India (NSE)",
      location: "BKC, Mumbai, Maharashtra, India",
      period: "2026 – Present",
      type: "Apprenticeship (NATS)",
      statusBadge: "Current Active Role",
      description: "Selected under the National Apprenticeship Training Scheme (NATS) administered by the Ministry of Education, Government of India. Contributing to mission-critical operational data workflows, market surveillance processes, and financial regulatory validation at one of the world's largest derivatives and equity exchanges.",
      responsibilities: [
        "Participating in automated validation of financial exchange records, member reconciliations, and regulatory reports",
        "Developing Python utility scripts to accelerate data integrity checks across high-volume transaction datasets",
        "Observing enterprise-grade data security protocols, failover systems, and mission-critical financial exchange infrastructure",
        "Synthesizing complex audit requirements into structured operational spreadsheets and analytical summaries"
      ],
      skillsLearned: ["Financial Market Structure", "Regulatory Compliance", "Enterprise Data Systems", "Python Automation"]
    },
    {
      role: "Lead Student Researcher & Project Developer",
      organization: "Chandrabhan Sharma College / University of Mumbai",
      location: "Powai, Mumbai",
      period: "2023 – Present",
      type: "Academic & Research",
      statusBadge: "Undergraduate",
      description: "Driving research initiatives in applied artificial intelligence, natural language processing, and predictive analytics while maintaining top academic standing (8.58 SGPI).",
      responsibilities: [
        "Architected PersonaPlex 7B, researching 4-bit quantization boundaries on consumer-grade GPU architectures",
        "Designed and published the EcomIQ consumer behavior research project, collecting and cleaning 300+ primary responses",
        "Won recognition in collegiate technical presentation symposiums for clear communication of complex data principles"
      ],
      skillsLearned: ["LLM Fine-Tuning/Quantization", "Survey Methodology", "Data Storytelling", "Statistical Testing"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Data Science (B.Sc. DS)",
      institution: "Chandrabhan Sharma College of Arts, Science & Commerce",
      affiliation: "Affiliated with the University of Mumbai",
      location: "Powai, Mumbai, Maharashtra",
      period: "2023 – 2026",
      grade: "SGPI: 8.58 / 10.0 (Semesters I–IV)",
      status: "Final Year Undergraduate",
      coursework: [
        "Machine Learning & Statistical Pattern Recognition",
        "Advanced Python for Data Science & Numerical Computing",
        "Database Management Systems & SQL Query Optimization",
        "Linear Algebra, Multivariable Calculus & Probability Theory",
        "Data Structures, Algorithms & Computational Complexity",
        "Big Data Engineering & Business Intelligence"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science Stream",
      institution: "Maharashtra State Board of Secondary & Higher Secondary Education",
      location: "Mumbai, Maharashtra",
      period: "2021 – 2023",
      grade: "Completed with Science Specialization",
      coursework: ["Physics", "Chemistry", "Mathematics", "Information Technology & Computer Fundamentals"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board of Secondary & Higher Secondary Education",
      location: "Mumbai, Maharashtra",
      period: "2020 – 2021",
      grade: "71.60% (Distinction in Science & Mathematics)",
      coursework: ["General Science", "Advanced Mathematics", "Social Sciences", "English & Regional Languages"]
    }
  ],

  certifications: [
    {
      id: "deloitte-data-analytics",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte & Forage",
      date: "November 2025",
      badge: "Industry Simulation",
      category: "analytics",
      credentialId: "jXnqo93RJeWrgvKJZ / q3fynK5wqP3nQmMPW",
      verificationUrl: "https://www.theforage.com/simulations/deloitte-au/data-analytics-ey3e",
      image: "assets/certifications/deloitte_data_analytics.webp",
      description: "Completed practical simulation involving real-world client data challenges: data forensic analysis, dashboard creation in Tableau, and presenting strategic data-driven insights to executive stakeholders."
    },
    {
      id: "livewire-data-engineering",
      title: "Data Science & Data Engineering Using Python",
      issuer: "Livewire Chembur & Udaan India Foundation",
      date: "April 2025",
      badge: "Professional Training",
      category: "data-science",
      credentialId: "CO250423Z613443",
      verificationUrl: null,
      image: "assets/certifications/livewire_data_engineering.webp",
      description: "Rigorous industry-grade curriculum focusing on Python data pipelines, NumPy/Pandas manipulation, exploratory data analysis, data warehousing concepts, and predictive modeling."
    },
    {
      id: "livewire-powerbi",
      title: "Data Analytics Using Power BI",
      issuer: "Livewire Chembur & Udaan India Foundation",
      date: "April 2025",
      badge: "BI & Visualization",
      category: "analytics",
      credentialId: "CO250423Z613443",
      verificationUrl: null,
      image: "assets/certifications/livewire_powerbi.webp",
      description: "Comprehensive hands-on training on DAX query design, relational star-schema modeling, Power Query ETL pipelines, and executive KPI dashboard visualization."
    },
    {
      id: "niit-cyberops",
      title: "CyberOps & Professional Edge",
      issuer: "NIIT Foundation & Fiserv CSR",
      date: "March 2026",
      badge: "Grade: Outstanding",
      category: "security",
      credentialId: "26F2722150012392741",
      verificationUrl: null,
      image: "assets/certifications/niit_cyberops.webp",
      description: "Awarded top grade 'Outstanding'. Covered network security fundamentals, threat detection, operational vulnerability assessment, cybersecurity incident response, and workplace professionalism."
    },
    {
      id: "quastech-python",
      title: "Full Stack Python Program",
      issuer: "QUASTECH & Chandrabhan Sharma College",
      date: "Academic Year 2025–26",
      badge: "Collegiate Certificate",
      category: "programming",
      credentialId: "CSC-QT-PY-2025",
      verificationUrl: null,
      image: "assets/certifications/quastech_python.webp",
      description: "In-depth development training covering Python core architecture, OOP principles, REST API construction, database connectivity, and modern web application development."
    },
    {
      id: "cisco-cybersecurity",
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "Verified Digital Badge",
      badge: "Global Credential",
      category: "security",
      credentialId: "Cisco Verified",
      verificationUrl: null,
      image: "assets/certifications/cisco_cybersecurity.webp",
      description: "Validated fundamental competencies in network topologies, defensive security architectures, encryption methods, cyber threat matrices, and data privacy safeguards."
    },
    {
      id: "udemy-data-analysis",
      title: "Data Analysis: Learn Data Science & Analytics",
      issuer: "Udemy",
      date: "March 2024",
      badge: "Online Specialization",
      category: "analytics",
      credentialId: "UC-55541f27-990e-4422-bc52-368d4fb59eb7",
      verificationUrl: "https://ude.my/UC-55541f27-990e-4422-bc52-368d4fb59eb7",
      image: "assets/certifications/udemy_data_analysis.webp",
      description: "Comprehensive coursework covering statistical hypothesis testing, descriptive and inferential analytics, data wrangling pipelines, and statistical modeling in Python."
    },
    {
      id: "udemy-r-programming",
      title: "2024 R Programming Bootcamp for Beginners",
      issuer: "Udemy",
      date: "January 2024",
      badge: "Statistical Computing",
      category: "programming",
      credentialId: "UC-6708563e-0733-44ee-9a46-c24366d47d30",
      verificationUrl: "https://ude.my/UC-6708563e-0733-44ee-9a46-c24366d47d30",
      image: "assets/certifications/udemy_r_programming.webp",
      description: "Mastered core R programming structures, data frame operations with dplyr, statistical distribution calculations, and publication-ready charting with ggplot2."
    },
    {
      id: "niit-advanced-excel",
      title: "Advance Word & Excel (72 Hours Certified)",
      issuer: "NIIT Foundation & Udaan India Foundation",
      date: "October 2024",
      badge: "Grade: Excellent",
      category: "analytics",
      credentialId: "RID0007581739",
      verificationUrl: null,
      image: "assets/certifications/niit_word_excel.webp",
      description: "Completed intensive 72-hour curriculum with 'Excellent' rating. Mastered nested formulas, dynamic array functions, XLOOKUP, advanced Pivot Tables, macros, and executive reporting."
    },
    {
      id: "niit-digital-marketing",
      title: "Digital Marketing Foundation",
      issuer: "NIIT Foundation",
      date: "November 2024",
      badge: "Digital Skills",
      category: "marketing",
      credentialId: "RID0007581739-DM",
      verificationUrl: null,
      image: "assets/certifications/niit_digital_marketing.webp",
      description: "Practical training in digital presence architecture, Search Engine Optimization (SEO), web analytics tracking, conversion funnels, and data-driven audience segmentation."
    },
    {
      id: "csc-talent-hunt",
      title: "Talent Hunt: Technical PowerPoint Presentation",
      issuer: "Chandrabhan Sharma College",
      date: "December 2023",
      badge: "Academic Award",
      category: "academic",
      credentialId: "CSC-TH-2023",
      verificationUrl: null,
      image: "assets/certifications/csc_talent_hunt.webp",
      description: "Awarded Certificate of Merit in the collegiate Talent Hunt event for delivering an outstanding technical presentation elucidating emerging trends in artificial intelligence."
    },
    {
      id: "udaan-yuva-english",
      title: "YUVA Spoken English & Communication Program",
      issuer: "Udaan India Foundation",
      date: "Academic Year 2023–24",
      badge: "Professional Edge",
      category: "academic",
      credentialId: "UDAAN-YUVA-2024",
      verificationUrl: null,
      image: "assets/certifications/udaan_spoken_english.webp",
      description: "Successfully graduated from the intensive YUVA communication and leadership fellowship, honing technical articulation, business communication, and cross-functional team collaboration."
    }
  ],

  gallery: [
    {
      id: "gal-personaplex",
      title: "PersonaPlex 7B 4-bit Architecture",
      category: "ai-ml",
      categoryLabel: "AI & LLM",
      image: "assets/gallery/personaplex_showcase.webp",
      caption: "Quantized conversational architecture routing natural speech inputs to a 4-bit NF4 7B parameter LLM on Google Colab T4."
    },
    {
      id: "gal-ecomiq-banner",
      title: "EcomIQ Predictive Analytics App",
      category: "analytics",
      categoryLabel: "Data Science",
      image: "assets/gallery/ecomiq_banner.webp",
      caption: "Production UI banner for EcomIQ consumer behavior forecasting dashboard comparing Random Forest, Decision Tree, and Logistic Regression models."
    },
    {
      id: "gal-survey-flyer",
      title: "E-Commerce Primary Research Survey",
      category: "analytics",
      categoryLabel: "Research",
      image: "assets/gallery/ecomiq_survey.webp",
      caption: "Official survey instrument deployed across Mumbai academic and consumer circles, capturing over 300 verified response data points."
    },
    {
      id: "gal-local-ai",
      title: "Local AI & Vector Search Topology",
      category: "dev",
      categoryLabel: "Systems & Infrastructure",
      image: "assets/gallery/local_ai_architecture.webp",
      caption: "Microservice schematic illustrating private document indexing into Qdrant vector store and Ollama inference via FastAPI."
    },
    {
      id: "gal-movie-dashboard",
      title: "Movie Success Prediction & Tableau",
      category: "analytics",
      categoryLabel: "Data Modeling",
      image: "assets/gallery/movie_analytics_dashboard.webp",
      caption: "Multi-dimensional performance dashboard examining the interplay of film production budgets, genre synergies, and box office returns."
    },
    {
      id: "gal-deloitte",
      title: "Deloitte Data Analytics Verification",
      category: "credentials",
      categoryLabel: "Industry Credential",
      image: "assets/gallery/deloitte_spotlight.webp",
      caption: "Deloitte practical job simulation certificate validating Tableau dashboarding, forensic data analytics, and stakeholder presentation skills."
    },
    {
      id: "gal-cyberops",
      title: "NIIT & Fiserv CyberOps 'Outstanding' Grade",
      category: "credentials",
      categoryLabel: "Specialized Training",
      image: "assets/gallery/cyberops_spotlight.webp",
      caption: "Certified credential from NIIT Foundation & Fiserv demonstrating mastery of network defense, security incident response, and cyber operations."
    }
  ]
};

// Freeze data to avoid accidental mutations
Object.freeze(PORTFOLIO_DATA);
