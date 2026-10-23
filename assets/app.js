
const videoProjects = [
            {
                id: 1,
                title: "Captura de Imagem & Edição/Montagem",
                category: "eventos",
                categoryLabel: "Eventos & Cobertura",
                vimeoId: "1236573731",
                image: "02_video/CAPA_VIDEOS.jpg",
                description: "Edição e montagem dinâmica com captura de imagens de eventos, foco em ritmo e atmosfera.",
                year: "2025",
                software: "Premiere Pro"
            },
            {
                id: 2,
                title: "Composição Final (Petiscos) - DCB",
                category: "promo",
                categoryLabel: "Promocional & Comercial",
                vimeoId: "1236590151",
                image: "02_video/CAPA_DCB.jpg",
                description: "Composição e edição promocional com grafismos e animação de produtos para a DCB.",
                year: "2019",
                software: "Premiere Pro, After Effects"
            },
            {
                id: 3,
                title: "Bebidas (Balde, Copo, Shot) - DCB",
                category: "promo",
                categoryLabel: "Promocional & Comercial",
                vimeoId: "1236591757",
                image: "02_video/CAPA_DCB.jpg",
                description: "Anúncio dinâmico para linha de bebidas com edição ritmada e efeitos de pós-produção.",
                year: "2019",
                software: "Premiere Pro, After Effects"
            },
            {
                id: 4,
                title: "Sparkle-IT",
                category: "promo",
                categoryLabel: "Corporativo & Tecnológico",
                vimeoId: "1236593969",
                image: "02_video/CAPA_SparkleIT.jpg",
                description: "Vídeo institucional e de apresentação para a marca Sparkle-IT.",
                year: "2019",
                software: "Premiere Pro, After Effects"
            },
            {
                id: 5,
                title: "RAID-TT Vilar de Murteda Promo",
                category: "eventos",
                categoryLabel: "Eventos & Desporto",
                vimeoId: "1236595209",
                image: "02_video/CAPA_Raid TT.jpg",
                description: "Vídeo promocional do evento RAID-TT em Vilar de Murteda, com montagem enérgica e som envolvente.",
                year: "2020",
                software: "Premiere Pro, After Effects"
            }
        ];
const designProjects = [
            {
                id: 1,
                title: "Catálogo de Produtos & Serviços",
                category: "editorial",
                categoryLabel: "Editorial / Catálogo",
                image: "03_designG/Design Gráfico_Revista.jpg",
                detailImage: "03_designG/Design Gráfico_Revista.jpg",
                description: "Catálogo editorial interativo desenvolvido para apresentação de produtos e serviços corporativos.\nDisponível em versão digital paginada e impressão.",
                externalUrl: "https://heyzine.com/flip-book/0b2d0ccd4b.html",
                externalBtnText: "Abrir Revista Interativa (Heyzine)",
                year: "2005 a 2019",
                software: "InDesign, Photoshop"
            },
            {
                id: 2,
                title: "PANFLETOS",
                category: "publicidade",
                categoryLabel: "Publicidade / Editorial",
                image: "03_designG/G 02_TRIPTICO_mockup.jpg",
                detailImage: "03_designG/G 02_TRIPTICO_Detalhe.jpg",
                description: "Triptico desenvolvido para O Mundo A Dançar, com informação do evento e de toda a programação.\nDesign e composição gráfica para suportes promocionais, cartazes e desdobráveis. \nMonção.",
                year: "2005 a 2026",
                software: "Illustrator, Photoshop"
            },
            {
                id: 3,
                title: "Design de T-Shirt & Vestuário",
                category: "textil",
                categoryLabel: "Design Têxtil & Vestuário",
                image: "03_designG/G 03_AMA_mockup.jpg",
                detailImage: "03_designG/G 03_AMA_Detalhe.jpg",
                description: "Criação e desenvolvimento de grafismo para estampagem em camisolas.\nTrabalho desenvolvida para evento da associação AMA.\nViana do Castelo",
                year: "2025",
                software: "Illustrator, Photoshop"
            },
            {
                id: 4,
                title: "Fundo de Stand / Outdoors",
                category: "grandes-formatos",
                categoryLabel: "Grandes Formatos & Stands",
                image: "03_designG/SUA_IMAGEM_STAND.jpg",
                detailImage: "03_designG/SUA_IMAGEM_STAND.jpg",
                description: "Design de grande formato para comunicação exterior, outdoors, lona microperfurada e estruturas de exposição/stands.\nFundo de stand para feira, para a empresa Roberto Pereira/Topmold.\nPataias (Leiria)",
                year: "2026",
                software: "Photoshop"
            }
        ];
const logoProjects = [
            {
                id: 1,
                title: "Maison Ferreira",
                category: "criativo",
                categoryLabel: "Criativo & Conceito",
                image: "04_logos/03_MaisonFerreira_mockup.jpg",
                detailImage: "04_logos/03_MaisonFerreira_logo.jpg",
                description: "Design conceptual inspirado na assinatura pessoal, com o detalhe da folha de vinha.\nComercial de rolhas de cortiça.\nFrança",
                year: "2020"
            },
            {
                id: 2,
                title: "Tânia Botelho",
                category: "minimalista",
                categoryLabel: "Minimalista/Monograma",
                image: "04_logos/01_TANI-BOTELHO_mockup.jpg",
                detailImage: "04_logos/01_TANI-BOTELHO_logo.jpg",
                description: "Monograma sofisticado e marca pessoal desenvolvidos para a advogada Tânia Botelho.\nDesign conceptual que combina de forma estilizada as letras T e B com a balança da justiça, transmitindo confiança, rigor e nobreza.\nAçores",
                year: "2024"
            },
            {
                id: 3,
                title: "Folk O Mundo A Dançar",
                category: "criativo",
                categoryLabel: "Criativo & Conceito",
                image: "04_logos/04_FOLKMONCAO_mockup.jpg",
                detailImage: "04_logos/04_FOLKMONCAO_logo.jpg",
                description: "Design de logótipo e imagem de marca para o festival Folk - O Mundo a Dançar.\nSímbolo dinâmico e fluido que representa o movimento, a união de culturas e a diversidade cultural.\nDesenvolvido para forte presença em suportes impressos de grande formato, merchandising e canais digitais.\nMonção",
                year: "2010 (Versão inicial); Atualização do nome em 2025"
            },
            {
                id: 4,
                title: "Euromib",
                category: "minimalista",
                categoryLabel: "Minimalista/Monograma",
                image: "04_logos/02_EUROMIB_mockup.jpg",
                detailImage: "04_logos/02_EUROMIB_logo.jpg",
                description: "Identidade corporativa desenvolvida para empresa francesa, na área da construção.\nSímbolo geométrico que transmitem dinamismo, rigor e modernidade.\nFrança",
                year: "2014"
            },
            {
                id: 5,
                title: "Laura Freitas",
                category: "criativo",
                categoryLabel: "Criativo & Conceito",
                image: "04_logos/05_LAURA_FREITA_mockup.jpg",
                detailImage: "04_logos/05_LAURA_FREITA_logo.jpg",
                description: "Identidade visual para marca pessoal na área de Reiki, Constelações Familiares e Terapia Genosistémica.\nSímbolo orgânico e fluido que transmite equilíbrio, renovação e bem-estar em harmonia.\nAplicação em cartões de visita, vouchers de oferta e redes sociais.\nGuimarães",
                year: "2023"
            },
            {
                id: 6,
                title: "MicroPlant LDA",
                category: "corporativo",
                categoryLabel: "Corporativo/Profissional",
                image: "04_logos/06_MicroPlant_mockup.jpg",
                detailImage: "04_logos/06_MicroPlant_logos.jpg",
                description: "Design de logótipo corporativo (2 versões) para o setor de biotecnologia e propagação vegetal.\nSímbolo que integra a folha e a lupa, destacando a precisão científica, limpeza sanitária e investigação.\nAplicação em suportes informativos e institucionais.\nUniversidade de Évora",
                year: "2023"
            },
            {
                id: 7,
                title: "Pronto!",
                category: "corporativo",
                categoryLabel: "Corporativo/Profissional",
                image: "04_logos/07_Pronto_mockup.jpeg",
                detailImage: "04_logos/07_Pronto_logo.png",
                description: "Design de logótipo desenvolvido para empresa de serviços e manutenção do lar.\nComposição limpa com contraste de cores vivas que reforça a confiança, proximidade e facilidade de contacto.\nSanta Maria da Feira",
                year: "2026"
            },
            {
                id: 8,
                title: "Vilar Heranca Village",
                category: "criativo",
                categoryLabel: "Criativo & Conceito",
                image: "04_logos/08_VHV_mockup.jpg",
                detailImage: "04_logos/08_VHV_logo.png",
                description: "Design de logótipo e marca para o projeto Vilar Herança Village.\nComposição elegante que alia a tradição e ligação à terra, a um conceito moderno de agroturismo, turismo eco-sustentável e inteligente.\nViana do Castelo",
                year: "2025"
            }
        ];
const allProjectSets={video:videoProjects,design:designProjects,logos:logoProjects};
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderPortfolio() {
 const cat=document.body.dataset.category||'video', projects=allProjectSets[cat]||[];
 const grid=document.querySelector('#projectGrid'); if(!grid)return;
 grid.innerHTML=projects.map((p,i)=>`<article class="card" tabindex="0" role="button" onclick="openProject('${cat}',${i})" onkeydown="if(event.key==='Enter')openProject('${cat}',${i})">
 <div class="card-image"><img loading="lazy" src="${esc(p.image)}" alt="${esc(p.title)}" onerror="this.style.display='none';this.parentElement.innerHTML='<div class=&quot;empty-thumb&quot;>Imagem a adicionar</div>'"></div>
 <div class="card-body"><span class="tag">${esc(p.categoryLabel||cat)}</span><h3>${esc(p.title)}</h3><p>${esc(p.year||'Projeto de portfólio')}</p></div></article>`).join('');
}
function openProject(cat,index){
 const p=allProjectSets[cat][index], modal=document.querySelector('#projectModal'); if(!modal)return;
 let media='';
 if(cat==='video') media=`<iframe class="modal-video" src="https://player.vimeo.com/video/${encodeURIComponent(p.vimeoId)}?autoplay=1&title=0&byline=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)}"></iframe>`;
 else media=`<img src="${esc(p.detailImage||p.image)}" alt="${esc(p.title)}" onerror="this.style.display='none'">`;
 modal.innerHTML=`<div class="modal-box ${cat==='video'?'video-detail':''}" role="dialog" aria-modal="true" aria-label="${esc(p.title)}"><button class="modal-close" onclick="closeProject()" aria-label="Fechar">×</button>${media}<div class="modal-copy"><span class="eyebrow">${esc(p.categoryLabel||cat)}</span><h2>${esc(p.title)}</h2><p>${esc(p.description||'Projeto de portfólio.')}</p><p><strong>Ano:</strong> ${esc(p.year||'—')}${p.software?'<br><strong>Ferramentas:</strong> '+esc(p.software):''}</p>${p.externalUrl?`<a class="button" target="_blank" rel="noopener" href="${esc(p.externalUrl)}">${esc(p.externalBtnText||'Ver projeto online')} ↗</a>`:''}</div></div>`;
 modal.classList.add('open');document.body.style.overflow='hidden';
}
function closeProject(){const m=document.querySelector('#projectModal');if(m){m.classList.remove('open');m.innerHTML='';}document.body.style.overflow='';}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProject();});
document.addEventListener('click',e=>{const m=document.querySelector('#projectModal');if(m&&e.target===m)closeProject();});
document.addEventListener('DOMContentLoaded',()=>{renderPortfolio();const toggle=document.querySelector('.menu-toggle');if(toggle)toggle.addEventListener('click',()=>document.querySelector('.nav').classList.toggle('show'));});
