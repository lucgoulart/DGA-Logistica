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
     logo: 'assets/parceiro1-Photoroom.png',
   },
  {
    nome: '5F',
    descricao: 'A 5F é uma empresa especializada em Tecnologia da Informação (TI), oferecendo soluções digitais que vão desde infraestrutura de rede, serviços em nuvem (cloud), segurança da informação, suporte técnico até projetos de transformação digital. Atua com foco no setor corporativo, apoiando empresas na modernização de seus ambientes tecnológicos com escalabilidade, confiabilidade e inovação. Seu diferencial está no atendimento personalizado e na entrega de soluções sob medida para cada negócio.',
    logo: 'assets/parceiro4-Photoroom.png',
  },
  {
    nome: 'ATACADÃO',
    descricao: 'O Atacadão é uma das maiores redes de atacado de autosserviço do Brasil e pertence ao Grupo Carrefour. É referência no abastecimento de pequenos e médios comerciantes, além de consumidores finais que buscam economia em compras em grandes volumes. Está presente em todo o território nacional com centenas de lojas físicas e canais digitais.',
    logo: 'assets/parceiro3-Photoroom.png',
  },
  {
    nome: 'CARREFOUR',
    descricao: 'O Carrefour é uma das maiores redes varejistas do mundo e uma das principais do Brasil, com atuação em hipermercados, supermercados, drogarias, postos de combustíveis e no atacarejo (via Atacadão). Possui forte presença em canais digitais e investe em soluções de omnichannel, sustentabilidade e inclusão.',
    logo: 'assets/parceiro2-Photoroom.png',
  },
  {
    nome: 'WEBMOTORS',
    descricao: 'A Webmotors é a principal plataforma digital de compra e venda de veículos no Brasil. Fundada em 1995, conecta consumidores, concessionárias, lojistas e financeiras com soluções integradas que facilitam a jornada de compra e venda de automóveis. Também oferece conteúdos sobre o setor automotivo e ferramentas de comparação e simulação.',
    logo: 'assets/parceiro7-Photoroom.png',
  },
  {
    nome: 'VOICE DATA',
    descricao: 'A Voice Data é uma empresa de tecnologia e telecomunicações que oferece soluções de conectividade, telefonia IP, PABX em nuvem, link dedicado e serviços corporativos. Focada em empresas que buscam comunicação eficiente, segura e escalável, a Voice Data também atua com suporte técnico personalizado e projetos sob demanda.',
    logo: 'assets/parceiro6-Photoroom.png',
  },
  {
    nome: 'SANTANDER',
    descricao: 'O Santander Brasil é um dos maiores bancos privados do país, parte do grupo espanhol Banco Santander. Atua com soluções completas em banco de varejo, atacado, investimentos, cartões, financiamentos, seguros e tecnologia financeira. Tem como pilares a inovação, a educação financeira e o desenvolvimento sustentável.',
    logo: 'assets/parceiro5-Photoroom.png',
  },

  

];


  scrollTop = 0;
  sectionHeight = 700;


onScroll(event: any) {
  this.scrollTop = event.target.scrollTop;
}

getOpacity(index: number): number {
  const vh = window.innerHeight;
  const position = this.scrollTop / vh;
  const diff = index - position;
  if (diff >= -1 && diff <= 1) {
    return 1 - Math.abs(diff);
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

  }
}