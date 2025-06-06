import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.scss']
})
export class ParceirosComponent implements OnInit {
  items = [
    {
      texto: 'A Natura é uma das maiores empresas de cosméticos e cuidados pessoais da América Latina, conhecida por seu compromisso com a sustentabilidade, inovação e uso de ingredientes naturais. Parte do grupo Natura &Co (que inclui Avon e The Body Shop), tem forte presença no Brasil e no exterior, operando com vendas diretas, varejo físico e e-commerce',
      imagem: 'assets/parceiro1-Photoroom.png',
      imagemTexto: 'assets/natura-info.png',
      cor: '#fff'
    },
    {
      texto: 'O Carrefour é uma das maiores redes varejistas do mundo e uma das principais do Brasil, com atuação em hipermercados, supermercados, drogarias, postos de combustíveis e no atacarejo (via Atacadão). Possui forte presença em canais digitais e investe em soluções de omnichannel, sustentabilidade e inclusão.',
      imagem: 'assets/parceiro2-Photoroom.png',
      cor: '#efefef'
    },
    {
      texto: 'O Atacadão é uma das maiores redes de atacado de autosserviço do Brasil e pertence ao Grupo Carrefour. É referência no abastecimento de pequenos e médios comerciantes, além de consumidores finais que buscam economia em compras em grandes volumes. Está presente em todo o território nacional com centenas de lojas físicas e canais digitais.',
      imagem: 'assets/parceiro3-Photoroom.png',
      imagemTexto: 'assets/atacadao-matriz.jpeg',
      cor: '#fff'
    },
      {
      texto: 'A 5F é uma empresa especializada em Tecnologia da Informação (TI), oferecendo soluções digitais que vão desde infraestrutura de rede, serviços em nuvem (cloud), segurança da informação, suporte técnico até projetos de transformação digital. Atua com foco no setor corporativo, apoiando empresas na modernização de seus ambientes tecnológicos com escalabilidade, confiabilidade e inovação. Seu diferencial está no atendimento personalizado e na entrega de soluções sob medida para cada negócio.',
      imagem: 'assets/parceiro4-Photoroom.png',
      cor: '#efefef'
    },
       {
      texto: 'O Santander Brasil é um dos maiores bancos privados do país, parte do grupo espanhol Banco Santander. Atua com soluções completas em banco de varejo, atacado, investimentos, cartões, financiamentos, seguros e tecnologia financeira. Tem como pilares a inovação, a educação financeira e o desenvolvimento sustentável.',
      imagem: 'assets/parceiro5-Photoroom.png',
      cor: '#fff'
    },
       {
      texto: 'A Voice Data é uma empresa de tecnologia e telecomunicações que oferece soluções de conectividade, telefonia IP, PABX em nuvem, link dedicado e serviços corporativos. Focada em empresas que buscam comunicação eficiente, segura e escalável, a Voice Data também atua com suporte técnico personalizado e projetos sob demanda.',
      imagem: 'assets/parceiro6-Photoroom.png',
      cor: '#efefef'
    },
       {
      texto: 'A Webmotors é a principal plataforma digital de compra e venda de veículos no Brasil. Fundada em 1995, conecta consumidores, concessionárias, lojistas e financeiras com soluções integradas que facilitam a jornada de compra e venda de automóveis. Também oferece conteúdos sobre o setor automotivo e ferramentas de comparação e simulação.',
      imagem: 'assets/parceiro7-Photoroom.png',
      cor: '#fff'
    }
  ];
  currentText: string = '';
  currentItem: any = null;
  currentColor: string = '';
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.onScroll();

  }

  onScroll() {
    const scrollTop = this.scrollContainer.nativeElement.scrollTop;
    const sectionHeight = this.scrollContainer.nativeElement.clientHeight;
    const index = Math.floor(scrollTop / sectionHeight);
    const item = this.items[index];

    if (item) {
      this.currentItem = item;
      this.currentText = item.texto;
      this.currentColor = item.cor;
    }
  }
}
