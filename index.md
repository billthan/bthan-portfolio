---
layout: default
---
<section class="hero" data-scroll-hero aria-labelledby="hero-title">
	<div class="hero__grid" aria-hidden="true"></div>
	<div class="shell hero__layout">
		<div class="hero__content">
			<div class="hero__identity">
				<img class="hero__portrait" src="{{ site.logo | relative_url }}" alt="Portrait of Bill Than">
				<p><span>Currently</span>Microsoft</p>
			</div>
			<p class="eyebrow hero__eyebrow">Cloud Solution Architect</p>
			<h1 id="hero-title">Bill Than</h1>
			<p class="hero__lead">Designing cloud and data platforms that turn ambitious ideas into dependable systems.</p>
			<div class="hero__actions">
				<a class="button button--dark" href="#projects">Selected work <span aria-hidden="true">&darr;</span></a>
				<a class="text-link" href="{{ site.socials.github }}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">&nearr;</span></a>
			</div>
			<ul class="hero__proof" aria-label="Areas of focus">
				<li><strong>5x</strong> Microsoft certified</li>
				<li>Data engineering</li>
				<li>Analytics &amp; AI</li>
			</ul>
		</div>

		<div class="data-world" data-architecture role="img" aria-label="Animated data journey from on-prem systems through cloud services and a data lake to stakeholders">
			<svg class="system-map" viewBox="0 0 720 500" aria-hidden="true">
				<defs>
					<marker id="system-map-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="userSpaceOnUse">
						<path class="system-map__arrow" d="M0 0v6l8-3z"></path>
					</marker>
				</defs>

				<g class="system-map__decor">
					<circle cx="78" cy="90" r="5"></circle>
					<circle cx="653" cy="396" r="5"></circle>
					<path d="M116 76v22M105 87h22M615 430v22M604 441h22"></path>
				</g>

				<g class="system-map__flows">
					<path id="system-flow-ingest" class="system-map__flow system-map__flow--blue" marker-end="url(#system-map-arrow)" d="M174 316C224 316 190 120 228 120"></path>
					<path id="system-flow-lake" class="system-map__flow system-map__flow--green" marker-end="url(#system-map-arrow)" d="M374 145C414 179 378 315 407 331"></path>
					<path id="system-flow-serve" class="system-map__flow system-map__flow--gold" marker-end="url(#system-map-arrow)" d="M505 362C564 337 517 164 543 160"></path>
					<path id="system-flow-batch" class="system-map__flow system-map__flow--coral" marker-end="url(#system-map-arrow)" d="M174 343C244 451 340 444 392 393"></path>
				</g>

				<g class="system-map__packets">
					<circle class="system-map__packet system-map__packet--blue" r="8"><animateMotion dur="4.4s" begin="0s" repeatCount="indefinite"><mpath href="#system-flow-ingest"></mpath></animateMotion></circle>
					<rect class="system-map__packet system-map__packet--green" width="14" height="14" rx="4" x="-7" y="-7"><animateMotion dur="4.1s" begin="-1.4s" repeatCount="indefinite"><mpath href="#system-flow-lake"></mpath></animateMotion></rect>
					<circle class="system-map__packet system-map__packet--gold" r="8"><animateMotion dur="3.8s" begin="-2.3s" repeatCount="indefinite"><mpath href="#system-flow-serve"></mpath></animateMotion></circle>
					<rect class="system-map__packet system-map__packet--coral" width="13" height="13" rx="4" x="-6.5" y="-6.5"><animateMotion dur="5.2s" begin="-3s" repeatCount="indefinite"><mpath href="#system-flow-batch"></mpath></animateMotion></rect>
				</g>

				<g class="system-map__node system-map__node--onprem">
					<rect class="system-map__shadow" x="30" y="267" width="145" height="118" rx="27"></rect>
					<rect class="system-map__panel system-map__panel--coral" x="24" y="260" width="145" height="118" rx="27"></rect>
					<path class="system-map__divider" d="M40 344h113"></path>
					<g class="system-map__icon" transform="translate(76 274) scale(.72)">
						<path class="system-map__icon-fill" d="M0 27 29 5l29 22v48H0z"></path>
						<path d="M42 16V2h10v22M12 43h13v12H12zm31 0h13v12H43zM24 75V59h12v16"></path>
						<circle class="system-map__status system-map__status--one" cx="17" cy="49" r="2"></circle>
						<circle class="system-map__status system-map__status--two" cx="48" cy="49" r="2"></circle>
					</g>
					<text class="system-map__label" x="96.5" y="366" text-anchor="middle">On-prem</text>
				</g>

				<g class="system-map__node system-map__node--cloud">
					<rect class="system-map__shadow" x="234" y="64" width="166" height="122" rx="27"></rect>
					<rect class="system-map__panel system-map__panel--blue" x="228" y="57" width="166" height="122" rx="27"></rect>
					<path class="system-map__divider" d="M244 145h134"></path>
					<g class="system-map__icon" transform="translate(275 77) scale(.72)">
						<g class="system-map__cloud-float">
							<path class="system-map__icon-fill" d="M19 60h58c14 0 24-9 24-21 0-11-8-20-20-21C77 7 66 0 53 0 36 0 22 12 20 27 8 29 0 35 0 44c0 9 8 16 19 16Z"></path>
							<path d="m38 38 14-12 14 12m-14-12v24"></path>
						</g>
					</g>
					<text class="system-map__label" x="311" y="167" text-anchor="middle">Cloud</text>
				</g>

				<g class="system-map__node system-map__node--lake">
					<rect class="system-map__shadow" x="367" y="327" width="166" height="122" rx="27"></rect>
					<rect class="system-map__panel system-map__panel--green" x="361" y="320" width="166" height="122" rx="27"></rect>
					<path class="system-map__divider" d="M377 407h134"></path>
					<g class="system-map__icon" transform="translate(415 337) scale(.7)">
						<path class="system-map__lake-fill" d="M0 18c0-10 19-18 42-18s42 8 42 18v45c0 10-19 18-42 18S0 73 0 63Z"></path>
						<ellipse cx="42" cy="18" rx="42" ry="18"></ellipse>
						<path class="system-map__lake-wave system-map__lake-wave--one" d="M13 42c15 7 43 7 58 0"></path>
						<path class="system-map__lake-wave system-map__lake-wave--two" d="M13 59c15 7 43 7 58 0"></path>
					</g>
					<text class="system-map__label" x="444" y="430" text-anchor="middle">Data lake</text>
				</g>

				<g class="system-map__node system-map__node--people">
					<rect class="system-map__shadow" x="549" y="103" width="151" height="122" rx="27"></rect>
					<rect class="system-map__panel system-map__panel--gold" x="543" y="96" width="151" height="122" rx="27"></rect>
					<path class="system-map__divider" d="M559 181h119"></path>
					<g class="system-map__people" transform="translate(585 116) scale(.68)">
						<g transform="translate(0 12)"><circle cx="16" cy="14" r="12"></circle><path class="system-map__person-fill system-map__person-fill--blue" d="M0 62V45c0-12 7-19 16-19s16 7 16 19v17Z"></path></g>
						<g transform="translate(28 0)"><circle cx="20" cy="15" r="14"></circle><path class="system-map__person-fill system-map__person-fill--coral" d="M0 65V45c0-13 8-21 20-21s20 8 20 21v20Z"></path></g>
						<g transform="translate(67 14)"><circle cx="15" cy="13" r="11"></circle><path class="system-map__person-fill system-map__person-fill--green" d="M0 60V43c0-11 6-18 15-18s15 7 15 18v17Z"></path></g>
					</g>
					<text class="system-map__label" x="618.5" y="206" text-anchor="middle">Stakeholders</text>
				</g>
			</svg>
			<div class="system-map__mobile-legend" aria-hidden="true"><span>On-prem</span><i></i><span>Cloud</span><i></i><span>Data lake</span><i></i><span>People</span></div>
		</div>
	</div>
</section>

<section class="intro-band" aria-labelledby="intro-title">
	<div class="shell intro-grid">
		<p class="eyebrow">Profile</p>
		<div>
			<h2 id="intro-title">Complex systems in.<br>Clear decisions out.</h2>
			<p>I build cloud-based platforms that turn complex data into reliable inputs for decision-making. My work is grounded in scalable data engineering, risk-aware design, and analytics that support real-world outcomes.</p>
		</div>
	</div>
</section>

<section class="section" id="work" aria-labelledby="work-title">
	<div class="shell">
		<header class="section-heading">
			<p class="eyebrow">Experience</p>
			<h2 id="work-title">Building across public service and technology.</h2>
		</header>

		<div class="experience-list">
			<article class="experience-item">
				<div class="employer-mark employer-mark--microsoft">
					<span class="microsoft-mark" role="img" aria-label="Microsoft logo"><i></i><i></i><i></i><i></i></span>
				</div>
				<div class="experience-item__body">
					<div class="experience-item__heading">
						<div>
							<h3>Microsoft</h3>
							<p>Cloud &amp; AI</p>
						</div>
					</div>
					<ol class="role-list">
						<li><strong>Cloud Solution Architect</strong><span>July 2026 - present</span></li>
					</ol>
				</div>
			</article>

			<article class="experience-item">
				<div class="employer-mark">
					<img src="{{ '/assets/img/bank-of-canada.png' | relative_url }}" alt="Bank of Canada logo">
				</div>
				<div class="experience-item__body">
					<div class="experience-item__heading">
						<div>
							<h3>Bank of Canada</h3>
							<p>Data &amp; Analytics Solutions</p>
						</div>
					</div>
					<ol class="role-list">
						<li><strong>Senior Data &amp; Analytics Specialist</strong><span>April 2025 - June 2026</span></li>
					</ol>
				</div>
			</article>

			<article class="experience-item">
				<div class="employer-mark">
					<img src="{{ '/assets/img/ontario-wordmark.png' | relative_url }}" alt="Government of Ontario logo">
				</div>
				<div class="experience-item__body">
					<div class="experience-item__heading">
						<div>
							<h3>Ontario Land &amp; Resources</h3>
							<p>Data &amp; Advanced Analytics</p>
						</div>
					</div>
					<ol class="role-list">
						<li><strong>Senior Data Developer</strong><span>April 2024 - April 2025</span></li>
						<li><strong>Data Developer</strong><span>May 2023 - April 2024</span></li>
						<li><strong>Intern</strong><span>August 2022 - May 2023</span></li>
					</ol>
				</div>
			</article>

			<article class="experience-item">
				<div class="employer-mark">
					<img src="{{ '/assets/img/toronto-pfr.png' | relative_url }}" alt="Toronto Parks, Forestry and Recreation logo">
				</div>
				<div class="experience-item__body">
					<div class="experience-item__heading">
						<div>
							<h3>City of Toronto</h3>
							<p>Parks, Forestry &amp; Recreation</p>
						</div>
					</div>
					<ol class="role-list">
						<li><strong>Part-time Aquatic Trainer &amp; Pool In-Charge</strong><span>June 2018 - December 2024</span></li>
						<li><strong>Lifeguard &amp; Swim Instructor</strong><span>June 2018 - June 2020</span></li>
					</ol>
				</div>
			</article>

			<article class="experience-item">
				<div class="employer-mark employer-mark--symbol">
					<img src="{{ '/assets/img/normerica.png' | relative_url }}" alt="Normerica logo">
				</div>
				<div class="experience-item__body">
					<div class="experience-item__heading">
						<div>
							<h3>Normerica</h3>
							<p>Quality Assurance</p>
						</div>
					</div>
					<ol class="role-list">
						<li><strong>Student QA Tester</strong><span>January 2020 - March 2020</span></li>
					</ol>
				</div>
			</article>
		</div>
	</div>
</section>

<section class="section section--projects" id="projects" aria-labelledby="projects-title">
	<div class="shell">
		<header class="section-heading section-heading--split">
			<div>
				<p class="eyebrow">Selected projects</p>
				<h2 id="projects-title">Ideas made operational.</h2>
			</div>
			<p>Practical tools for moving data reliably from source systems into analysis and delivery workflows.</p>
		</header>

		<div class="project-grid">
			<article class="project-card">
				<a class="project-card__media" href="{{ site.github.finances }}" target="_blank" rel="noopener noreferrer" aria-label="Open jupyter-finances documentation">
					<img src="{{ site.finances | relative_url }}" alt="Architecture diagram for the jupyter-finances project" loading="lazy">
				</a>
				<div class="project-card__body">
					<p class="project-card__number">01</p>
					<h3><a href="{{ site.github.finances }}" target="_blank" rel="noopener noreferrer">jupyter-finances</a></h3>
					<p>A Docker-based workflow that pulls Plaid data into PostgreSQL for repeatable analysis in Jupyter Notebooks and Power BI.</p>
					<ul class="tag-list" aria-label="Project technologies">
						<li>Python</li><li>PostgreSQL</li><li>Docker</li><li>Power BI</li>
					</ul>
					<div class="project-card__links">
						<a class="text-link" href="{{ site.github.finances }}" target="_blank" rel="noopener noreferrer">Documentation <span aria-hidden="true">&nearr;</span></a>
						<a class="text-link" href="{{ site.github.repository_url }}" target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">&nearr;</span></a>
					</div>
				</div>
			</article>

			<article class="project-card">
				<a class="project-card__media" href="{{ site.github.oracle }}" target="_blank" rel="noopener noreferrer" aria-label="Open oracle-dbops on GitHub">
					<img src="{{ site.oracle | relative_url }}" alt="Workflow diagram for the oracle-dbops project" loading="lazy">
				</a>
				<div class="project-card__body">
					<p class="project-card__number">02</p>
					<h3><a href="{{ site.github.oracle }}" target="_blank" rel="noopener noreferrer">oracle-dbops</a></h3>
					<p>Repository-based Oracle DDL tracking for repeatable database review and deployment workflows with GitHub and Azure DevOps.</p>
					<ul class="tag-list" aria-label="Project technologies">
						<li>Oracle</li><li>PL/SQL</li><li>GitHub</li><li>Azure DevOps</li>
					</ul>
					<div class="project-card__links">
						<a class="text-link" href="{{ site.github.oracle }}" target="_blank" rel="noopener noreferrer">View source <span aria-hidden="true">&nearr;</span></a>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>

<section class="credential-band" id="credentials" aria-labelledby="credentials-title">
	<div class="shell">
		<header class="section-heading section-heading--light">
			<p class="eyebrow">Microsoft credentials</p>
			<h2 id="credentials-title">Five certifications across cloud, data, and AI.</h2>
		</header>
		<ol class="credential-list">
			<li><span class="credential-list__year">2026</span><strong>Azure Solutions Architect Expert</strong><span class="credential-list__index">01</span></li>
			<li><span class="credential-list__year">2025</span><strong>Azure Administrator Associate</strong><span class="credential-list__index">02</span></li>
			<li><span class="credential-list__year">2024</span><strong>Fabric Analytics Engineer</strong><span class="credential-list__index">03</span></li>
			<li><span class="credential-list__year">2023</span><strong>Azure Data Scientist Associate</strong><span class="credential-list__index">04</span></li>
			<li><span class="credential-list__year">2023</span><strong>Azure Data Engineer Associate</strong><span class="credential-list__index">05</span></li>
		</ol>
	</div>
</section>

<section class="section" aria-labelledby="skills-title">
	<div class="shell">
		<header class="section-heading section-heading--split">
			<div>
				<p class="eyebrow">Technical toolkit</p>
				<h2 id="skills-title">From ingestion to insight.</h2>
			</div>
			<p>A broad toolkit applied with an emphasis on maintainability, governance, and fit for purpose.</p>
		</header>
		<div class="skills-grid">
			<article><h3>Programming &amp; scripting</h3><p>Python, Django, Flask, Java, JavaScript, React, C#, .NET MAUI, Xamarin, PL/SQL, PL/pgSQL, Bash, PowerShell, YAML, Docker</p></article>
			<article><h3>Databases &amp; query</h3><p>Oracle 11g/12c/19c, Azure SQL, Azure Cosmos DB, PostgreSQL, KQL, Dataverse, Microsoft Access</p></article>
			<article><h3>Data engineering</h3><p>Microsoft Fabric, Azure Data Factory, Databricks, Apache Airflow, Informatica PowerCenter and IDMC, MuleSoft</p></article>
			<article><h3>Data science &amp; AI</h3><p>PySpark, Azure AI Search, Azure OpenAI, AI Foundry, Ollama, MATLAB</p></article>
			<article><h3>Visualization</h3><p>Power BI, Oracle APEX, Tableau, Matplotlib, Leaflet</p></article>
			<article><h3>Data governance</h3><p>Unity Catalog, Microsoft Purview</p></article>
		</div>
	</div>
</section>

<section class="background-band" aria-labelledby="background-title">
	<div class="shell background-grid">
		<div class="education-block">
			<h2 class="eyebrow" id="background-title">Education</h2>
			<div class="education-list">
				<article class="education-item">
					<div class="education-item__mark">
						<img src="{{ '/assets/img/smith-signature.png' | relative_url }}" alt="Smith School of Business at Queen's University logo">
					</div>
					<div class="education-item__body">
						<p class="education-item__meta">Current <span>Expected May 2027</span></p>
						<h3>Master of Management in Artificial Intelligence</h3>
						<p>Smith School of Business, Queen&apos;s University</p>
					</div>
				</article>
				<article class="education-item">
					<div class="education-item__mark education-item__mark--uoft">
						<img src="{{ '/assets/img/uoft-signature.png' | relative_url }}" alt="University of Toronto logo">
					</div>
					<div class="education-item__body">
						<p class="education-item__meta">Completed <span>High Distinction</span></p>
						<h3>Honours Bachelor of Information</h3>
						<p>University of Toronto</p>
					</div>
				</article>
			</div>
		</div>
		<div class="achievement-block">
			<p class="eyebrow">Recognition</p>
			<ul class="achievement-list">
				<li><span>2024</span>Ontario Public Service Hackathon Winner</li>
				<li><span>2023</span>Ontario Nominated Leadership Development Program Nominee</li>
				<li><span>2023</span>Appreciation in Motion, Forest Resource Inventory Program</li>
				<li><span>2023</span>Five Years of Service, Toronto Public Service</li>
				<li><span>2023</span>Ontario Public Service Hackathon Winner</li>
				<li><span>2022</span>Western University Founders Network Hackathon Finalist</li>
				<li><span>2022</span>COoKIE Human-Computer Interaction Research Group Alumni</li>
				<li><span>2021</span>NSERC Undergraduate Student Research Award</li>
			</ul>
		</div>
	</div>
</section>

<section class="connect-band" aria-labelledby="connect-title">
	<div class="shell connect-band__inner">
		<div>
			<p class="eyebrow">Connect</p>
			<h2 id="connect-title">Let&apos;s compare notes.</h2>
		</div>
		<div class="connect-band__links">
			<a class="button button--dark" href="{{ site.socials.linkedin }}" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">&nearr;</span></a>
			<a class="text-link" href="{{ site.socials.github }}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">&nearr;</span></a>
		</div>
	</div>
</section>

