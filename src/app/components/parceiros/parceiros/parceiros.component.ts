import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss'],
  animations: [
    trigger('fadeInImage', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ParceirosComponent implements OnInit {
 parceiros = [
   {
     nome: 'NATURA',
     descricao: 'A Natura é uma das maiores empresas de cosméticos e cuidados pessoais da América Latina, conhecida por seu compromisso com a sustentabilidade, inovação e uso de ingredientes naturais. Parte do grupo Natura &Co (que inclui Avon e The Body Shop), tem forte presença no Brasil e no exterior, operando com vendas diretas, varejo físico e e-commerce.',
     descricaoMobile: 'A Natura é referência em cosméticos sustentáveis na América Latina.',
     logo: 'assets/natura-matriz.jpeg',
   },
  {
    nome: '5F',
    descricao: 'A 5F é uma empresa especializada em Tecnologia da Informação (TI), oferecendo soluções digitais que vão desde infraestrutura de rede, serviços em nuvem (cloud), segurança da informação, suporte técnico até projetos de transformação digital. Atua com foco no setor corporativo, apoiando empresas na modernização de seus ambientes tecnológicos com escalabilidade, confiabilidade e inovação. Seu diferencial está no atendimento personalizado e na entrega de soluções sob medida para cada negócio.',
    descricaoMobile: 'Soluções digitais personalizadas em TI e transformação digital.',
    logo: 'assets/5fti-matriz.jpeg',
  },
  {
    nome: 'ATACADÃO',
    descricao: 'O Atacadão é uma das maiores redes de atacado de autosserviço do Brasil e pertence ao Grupo Carrefour. É referência no abastecimento de pequenos e médios comerciantes, além de consumidores finais que buscam economia em compras em grandes volumes. Está presente em todo o território nacional com centenas de lojas físicas e canais digitais.',
    descricaoMobile: 'Rede atacadista que abastece comerciantes e consumidores em todo o Brasil.',
    logo: 'assets/atacadaomercado-matriz.jpeg',
  },
  {
    nome: 'CARREFOUR',
    descricao: 'O Carrefour é uma das maiores redes varejistas do mundo e uma das principais do Brasil, com atuação em hipermercados, supermercados, drogarias, postos de combustíveis e no atacarejo (via Atacadão). Possui forte presença em canais digitais e investe em soluções de omnichannel, sustentabilidade e inclusão.',
    descricaoMobile: 'Rede varejista com foco em inovação, sustentabilidade e inclusão.',
    logo: 'assets/carrefour-matriz.jpeg',
  },
  {
    nome: 'WEBMOTORS',
    descricao: 'A Webmotors é a principal plataforma digital de compra e venda de veículos no Brasil. Fundada em 1995, conecta consumidores, concessionárias, lojistas e financeiras com soluções integradas que facilitam a jornada de compra e venda de automóveis. Também oferece conteúdos sobre o setor automotivo e ferramentas de comparação e simulação.',
    descricaoMobile: 'Principal plataforma digital de compra e venda de veículos no Brasil.',
    logo: 'assets/webmotors-matriz.jpeg',
  },
  {
    nome: 'VOICE DATA',
    descricao: 'A Voice Data é uma empresa de tecnologia e telecomunicações que oferece soluções de conectividade, telefonia IP, PABX em nuvem, link dedicado e serviços corporativos. Focada em empresas que buscam comunicação eficiente, segura e escalável, a Voice Data também atua com suporte técnico personalizado e projetos sob demanda.',
    descricaoMobile: 'Tecnologia em telecomunicações com soluções corporativas personalizadas.',
    logo: 'assets/voicedata-matriz.jpeg',
  },
  {
    nome: 'SANTANDER',
    descricao: 'O Santander Brasil é um dos maiores bancos privados do país, parte do grupo espanhol Banco Santander. Atua com soluções completas em banco de varejo, atacado, investimentos, cartões, financiamentos, seguros e tecnologia financeira. Tem como pilares a inovação, a educação financeira e o desenvolvimento sustentável.',
    descricaoMobile: 'Banco com foco em inovação, educação financeira e sustentabilidade.',
    logo: 'assets/santander-matriz.jpeg',
  },
];

  scrollTop = 0;
  sectionHeight = 700;
  isMobile = false;
  scrolling = false;

onScroll(event: any) {
  if (this.isMobile) {
    if (!this.scrolling) {
      this.scrolling = true;
      requestAnimationFrame(() => {
        this.scrollTop = event.target.scrollTop;
        this.scrolling = false;
      });
    }
  } else {
    this.scrollTop = event.target.scrollTop;
  }
}

getOpacity(index: number): number {
  const position = this.scrollTop / (this.isMobile ? this.sectionHeight : window.innerHeight);
  const diff = index - position;

  // Suaviza só no mobile
  const range = this.isMobile ? 1.5 : 1;

  if (Math.abs(diff) <= range) {
    return 1 - Math.min(Math.abs(diff) / range, 1);
  }
  return 0;
}


getActiveIndex(): number {
  return Math.min(
    this.parceiros.length - 1,
    Math.round(this.scrollTop / this.sectionHeight)
  );
}

ngOnInit(): void {
  this.isMobile = window.innerWidth <= 768;

  if (this.isMobile) {
    setTimeout(() => {
      const section = document.querySelector('.section') as HTMLElement;
      if (section) {
        this.sectionHeight = section.offsetHeight;
      }
    });
  }
}

}
