/* NX-Matrix Portfolio 2D v2 — lightweight, framework-free interactions */
(() => {
  'use strict';
  const roles = ['Software Developer', 'Data Science Student', 'Applied AI Builder', 'NX-Matrix Creator'];
  const roleNode = document.getElementById('rotating-role');
  let roleIndex = 0;
  if (roleNode && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.setInterval(() => {
      roleNode.style.opacity = '0';
      window.setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleNode.textContent = roles[roleIndex];
        roleNode.style.opacity = '1';
      }, 180);
    }, 2600);
    roleNode.style.transition = 'opacity .18s ease';
  }

  const menuButton = document.getElementById('menu-button');
  const nav = document.getElementById('nav-links');
  const closeNav = () => {
    nav?.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = '☰';
  };
  menuButton?.addEventListener('click', () => {
    const opened = nav?.classList.toggle('open') ?? false;
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.textContent = opened ? '✕' : '☰';
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNav));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNav(); });

  const toast = document.getElementById('toast');
  let toastTimer;
  const notify = message => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2200);
  };
  document.getElementById('copy-email')?.addEventListener('click', async () => {
    const email = 'ns077751@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      notify('Email copied to clipboard');
    } catch {
      window.location.href = `mailto:${email}`;
      notify('Opening your email app');
    }
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  const skills = [
    {name:'Python',group:'software',detail:'Automation · scripting · application logic',icon:'Py'},
    {name:'HTML · CSS · JavaScript',group:'software',detail:'Responsive UI · interactions · web basics',icon:'</>'},
    {name:'SQL & Databases',group:'software',detail:'Relational data · queries · schema design',icon:'DB'},
    {name:'FastAPI · Flask',group:'software',detail:'REST APIs · service integration',icon:'API'},
    {name:'Pandas · NumPy',group:'data',detail:'Data preparation · analysis · numerical work',icon:'Df'},
    {name:'Machine Learning',group:'ai',detail:'Classification · evaluation · feature analysis',icon:'ML'},
    {name:'LLMs & Transformers',group:'ai',detail:'Model inference · efficient quantization',icon:'AI'},
    {name:'Ollama · Local AI',group:'ai',detail:'Local inference · privacy-first experiments',icon:'◎'},
    {name:'Power BI',group:'data',detail:'Dashboards · data modeling · DAX',icon:'BI'},
    {name:'Tableau',group:'data',detail:'Visual analytics · data storytelling',icon:'▥'},
    {name:'Scikit-learn',group:'ai',detail:'Model comparison · classification workflows',icon:'sk'},
    {name:'Git & GitHub',group:'tools',detail:'Version control · repositories · collaboration',icon:'⌘'},
    {name:'Linux & Bash',group:'tools',detail:'Shell workflows · environment tooling',icon:'$_'},
    {name:'Qdrant · Embeddings',group:'ai',detail:'Vector retrieval · semantic search experiments',icon:'V+'},
    {name:'Streamlit · Gradio',group:'software',detail:'Data apps · interactive prototypes',icon:'UI'},
    {name:'Cybersecurity basics',group:'tools',detail:'Network security · privacy · threat awareness',icon:'◇'}
  ];
  const skillGrid = document.getElementById('skills-grid');
  const skillFilters = document.getElementById('skill-filters');
  const renderSkills = filter => {
    const visible = skills.filter(skill => filter === 'all' || skill.group === filter);
    skillGrid.innerHTML = visible.map(skill => `<article class="skill-card"><div class="skill-icon">${skill.icon}</div><h3>${skill.name}</h3><p>${skill.detail}</p></article>`).join('');
  };
  skillFilters?.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    skillFilters.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
    renderSkills(button.dataset.filter);
  });
  renderSkills('all');

  const projects = [
    {title:'EcomIQ — Predictive E-Commerce Analytics',category:'data',label:'DATA SCIENCE & ML',symbol:'↗',image:'assets/ecomiq.webp',subtitle:'Consumer behavior · predictive modeling',description:'A consumer analytics project built around 300+ survey responses. Compares classification approaches to model shopping behavior and presents findings through an interactive analytics workflow.',tags:['Python','Streamlit','Scikit-learn','Pandas'],github:'https://github.com/ns-matrix',live:'https://github.com/ns-matrix',liveLabel:'Project hub ↗'},
    {title:'PersonaPlex 7B · 4-bit',category:'ai',label:'APPLIED AI',symbol:'AI',image:'assets/personaplex.webp',subtitle:'Efficient large-model inference',description:'An experimental conversational AI build exploring voice/text interaction and 4-bit model quantization for lower-memory inference environments.',tags:['Python','Transformers','bitsandbytes','Gradio'],github:'https://github.com/ns-matrix',live:'https://ns-matrix-personaplex7b-4-bit.netlify.app',liveLabel:'Explore build ↗'},
    {title:'Local AI Assistant & Vector Search',category:'systems',label:'SYSTEMS',symbol:'⌘',image:'assets/local-ai.webp',subtitle:'Private retrieval · local inference',description:'A local-first architecture concept combining document retrieval, embeddings and model inference to explore private knowledge workflows without default dependence on hosted AI APIs.',tags:['Ollama','Qdrant','FastAPI','SQL'],github:'https://github.com/ns-matrix',live:'https://github.com/ns-matrix',liveLabel:'Explore code ↗'},
    {title:'Movie Success Prediction',category:'data',label:'PREDICTIVE MODELING',symbol:'▥',subtitle:'Classification · ROI exploration',description:'A data science workflow using historical film metadata to explore success tiers, modeling features and business-oriented visual analysis.',tags:['Python','SVM','KNN','Tableau'],github:'https://github.com/ns-matrix',live:'https://github.com/ns-matrix',liveLabel:'View project hub ↗'},
    {title:'Axiom AI Browser Execution Plane',category:'ai',label:'AI AUTOMATION',symbol:'↯',subtitle:'Supervised browser automation',description:'An evolving product concept for browser task recording and supervised execution with local models such as Ollama, including task verification and improvement loops.',tags:['Chrome','Ollama','Automation','UX'],github:'https://github.com/ns-matrix',live:'https://github.com/ns-matrix',liveLabel:'Explore repositories ↗'},
    {title:'NX-Matrix Project Showcase',category:'systems',label:'WEB DEVELOPMENT',symbol:'NX',subtitle:'Portfolio · project discovery',description:'A lightweight home for projects and developer work, with an emphasis on clear navigation, useful project descriptions and responsive presentation.',tags:['HTML','CSS','JavaScript','Netlify'],github:'https://github.com/ns-matrix',live:'https://nx-matrix-portfolio.netlify.app',liveLabel:'Visit portfolio ↗'}
  ];
  const projectGrid = document.getElementById('projects-grid');
  const projectFilters = document.getElementById('project-filters');
  const renderProjects = filter => {
    const visible = projects.filter(project => filter === 'all' || project.category === filter);
    projectGrid.innerHTML = visible.length ? visible.map((project, index) => `<article class="project-card"><div class="project-visual ${project.image ? 'has-image' : ''}">${project.image ? `<img src="${project.image}" alt="" loading="lazy" class="project-image">` : ''}<span class="project-index">PROJECT / ${String(index + 1).padStart(2,'0')}</span><span class="project-category">${project.label}</span><span class="project-symbol">${project.image ? '' : project.symbol}</span></div><div class="project-body"><h3>${project.title}</h3><p class="project-subtitle">${project.subtitle}</p><p class="project-description">${project.description}</p><div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div><div class="project-foot"><a href="${project.github}" target="_blank" rel="noreferrer">Source / GitHub ↗</a><a href="${project.live}" target="_blank" rel="noreferrer">${project.liveLabel}</a></div></div></article>`).join('') : '<p class="empty-state">No projects in this category yet.</p>';
  };
  projectFilters?.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    projectFilters.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
    renderProjects(button.dataset.filter);
  });
  renderProjects('all');
})();