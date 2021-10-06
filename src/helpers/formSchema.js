export const formSchema = [
  {
    inputType: "text",
    name: "mike",
    title: "N do MIKE",
    placeholder: "NÚMERO DA OCORRÊNCIA ",
  },
 
  {
    inputType: "text",
    name: "gt",
    title: "Guarnição",
    placeholder: "Ex: GTE 5055",
  },

  {
    inputType: "text",
    name: "efetivo",
    title: "Efetivo",
    placeholder: "Ex: CB José , SD Maria , SD João ",
  },

  

  {
    inputType: "select",
    name: "tipoOcorr",
    title: "Tipo de Ocorrência",
    placeholder: "Tipo de Ocorrência",
    options: [
      { value: "AMEAÇA", label: "AMEAÇA"},
      { value: "ATO / ESCRITO / OBJETO OBSCENO", label: "ATO / ESCRITO / OBJETO OBSCENO" },
      { value: "APROPRIAÇÃO INDÉBITA", label: "APROPRIAÇÃO INDÉBITA" },
      { value: "DANO / DEPREDAÇÃO", label: "DANO / DEPREDAÇÃO" },
      { value: "ESTELIONATO / FRAUDE", label: "ESTELIONATO / FRAUDE" },
      { value: "POSSE / INVASÃO DE PROPRIEDADE", label: "POSSE / INVASÃO DE PROPRIEDADE" },
      { value: "CALUNIA / DIFAMAÇÃO / INJURIA", label: "CALUNIA / DIFAMAÇÃO / INJURIA" },
      { value: "CONSTRANGIMENTO ILEGAL", label: "CONSTRANGIMENTO ILEGAL" },
      { value: "VIAS DE FATO / RIXA", label: "VIAS DE FATO / RIXA" },
      { value: "VIOLAÇÃO DE DOMICÍLIO", label: "VIOLAÇÃO DE DOMICÍLIO" },
      { value: "PERTURBAÇÃO DO SOSSEGO / TRANQUILIDADE PÚBLICA", label: "PERTURBAÇÃO DO SOSSEGO / TRANQUILIDADE PÚBLICA" },
      { value: "DESACATO", label: "DESACATO" },
      {
        value: "FAZER COBRANÇA DE DIVIDAS DE MANEIRA AMEAÇADORA",
        label: "FAZER COBRANÇA DE DIVIDAS DE MANEIRA AMEAÇADORA",
      },
      { value: "FALSA IDENTIDADE / FALSIDADE IDEOLÓGICA", label: "FALSA IDENTIDADE / FALSIDADE IDEOLÓGICA " },
      { value: "ACIDENTE DE TRÂNSITO SEM VÍTIMA", label: "ACIDENTE DE TRÂNSITO SEM VÍTIMA" },
      { value: "EXTRAVIO", label: "EXTRAVIO" },
      { value: "CRIMES CONTRA AS RELAÇÕES DE CONSUMO", label: "CRIMES CONTRA AS RELAÇÕES DE CONSUMO" },
      {
        value: "EXERCÍCIO ILEGAL DA MEDICINA, ARTE DENTÁRIA OU FARMACÊUTICA",
        label: "EXERCÍCIO ILEGAL DA MEDICINA, ARTE DENTÁRIA OU FARMACÊUTICA",
      },
      { value: "CRUELDADE CONTRA ANIMAIS", label: "CRUELDADE CONTRA ANIMAIS" },
      { value: "EXERCÍCIO ARBITRÁRIO DAS PRÓPRIAS RAZÕES", label: "EXERCÍCIO ARBITRÁRIO DAS PRÓPRIAS RAZÕES" },
      { value: "VIAS DE FATO", label: "VIAS DE FATO" },
      { value: "CALÚNIA", label: "CALÚNIA" },
      { value: "337DIFAMAÇÃO", label: "DIFAMAÇÃO" },
      { value: "DESENTENDIMENTO/DISCUSSÃO", label: "DESENTENDIMENTO/DISCUSSÃO" },
      { value: "INJURIA QUALIFICADA RACIAL", label: "INJURIA QUALIFICADA RACIAL" },
      { value: "ROUBO A TRANSEUNTE", label: "ROUBO A TRANSEUNTE" },
      { value: "ROUBO A ÔNIBUS", label: "ROUBO A ÔNIBUS" },
      { value: "ROUBO A OUTROS TRANSPORTES COLETIVOS", label: "ROUBO A OUTROS TRANSPORTES COLETIVOS" },
      { value: "ROUBO EM RESIDÊNCIA", label: "ROUBO EM RESIDÊNCIA" },
      {
        value: "ROUBO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS",
        label: "ROUBO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS",
      },
      { value: "ROUBO A OUTRAS INSTITUIÇÕES FINANCEIRAS", label: "ROUBO A OUTRAS INSTITUIÇÕES FINANCEIRAS" },
      { value: "ROUBO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA", label: "ROUBO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA)" },
      { value: "OUTROS ROUBOS", label: "OUTROS ROUBOS" },
      { value: "FURTO A TRANSEUNTE", label: "FURTO A TRANSEUNTE" },
      { value: "FURTO EM RESIDÊNCIA", label: "FURTO EM RESIDÊNCIA" },
      {
        value: "FURTO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS",
        label: "FURTO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS",
      },
      { value: "FURTO A OUTRAS INSTITUIÇÕES FINANCEIRAS", label: "FURTO A OUTRAS INSTITUIÇÕES FINANCEIRAS" },
      { value: "FURTO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA", label: "FURTO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA)" },
      { value: "OUTROS FURTOS", label: "OUTROS FURTOS" },
      { value: "AMEAÇA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR", label: "AMEAÇA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
      { value: "CALÚNIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR", label: "CALÚNIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
      { value: "DIFAMAÇÃO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR", label: "DIFAMAÇÃO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
      { value: "INJÚRIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR", label: "INJÚRIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
      {
        value: "DIFERENÇA DE FLUXO  CAIXA EM INST. FIN. OU TRANSP DE VALORES",
        label: "DIFERENÇA DE FLUXO  CAIXA EM INST. FIN. OU TRANSP DE VALORES",
      },
      { value: "INVASÃO DE DISPOSITIVO INFORMÁTICO", label: "INVASÃO DE DISPOSITIVO INFORMÁTICO" },
      {
        value: "CÁRCERE PRIVADO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR",
        label: "CÁRCERE PRIVADO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR",
      },
      { value: "DESCUMPRIMENTO DE MEDIDA PROTETIVA DE URGÊNCIA", label: "DESCUMPRIMENTO DE MEDIDA PROTETIVA DE URGÊNCIA" },
    ],
  },

  {
    inputType: "text",
    name: "endereco",
    title: "Logradouro",
    placeholder: "Ex: Rua 10 ,N 13",
  },

  {
    inputType: "text",
    name: "bairro",
    title: "Bairro",
    placeholder: "Ex: Centro",
  },
  
  {
    inputType: "text",
    name: "numero",
    title: "Número",
    placeholder: "Ex: 321",
  },

  {
    inputType: "text",
    name: "cep",
    title: "CEP",
    placeholder: "Ex: 56310-3310",
  },

  {
    inputType: "text",
    name: "municipio",
    title: "Município",
    placeholder: "Ex: Petrolina",
  },

  {
    inputType: "text",
    name: "ponto",
    title: "Ponto de referência",
    placeholder: "Ex: Mercado,Praça,Loja",
  },

  {
    inputType: "text",
    name: "horaFato",
    title: "Hora do fato",
    placeholder: "Ex: 20:20",
  },

  {
    inputType: "text",
    name: "horaRegistro",
    title: "Hora do registro",
    placeholder: "Ex: 20:20",
  },
  

  {
    inputType: "text",
    name: "dataFato",
    title: "Data do fato",
    placeholder: "DATA DO FATO",
  },

 

  /**Dados Pessoais da vitima */
];

export const personSchema = [
  [
    {
      inputType: "select",
      name: "tipo",
      title: "Tipo Envolvido",
      placeholder: "Tipo Envolvido",
      options: [
        {   value: "IMPUTADO" ,label: "IMPUTADO"},
        {   value: "TESTEMUNHA" ,label: "TESTEMUNHA" },
        {   value: "VÍTIMA" ,label: "VÍTIMA" },
        {   value: "OUTROS" ,label: "OUTROS" }],

    },

   
    
    {
      inputType: "text",
      name: "nome",
      title: "Nome",
      placeholder: "Nome Completo",
    },
    {
      inputType: "select",
      name: "sexo",
      title: "Sexo",
      placeholder: "Selecione o Sexo",
      options:[
        { value: "Masculino" , label: "Masculino" },
        { value: "Feminino" , label: "Feminino" } ]
    },
    

    {
      inputType: "text",
      name: "pai",
      title: "PAI",
      placeholder: "Nome do Pai",
    },

    {
      inputType: "text",
      name: "mae",
      title: "Mãe",
      placeholder: "Nome da Mãe",
    },

    {
      inputType: "text",
      name: "nascimento",
      title: "Data de Nascimento",
      placeholder: "Ex 10/05/1995",
    },
    {
      inputType: "text",
      name: "naturalidade",
      title: "Naturalidade",
      placeholder: "Ex: Petrolina",
    },
    {
      inputType: "text",
      name: "rg",
      title: "RG",
      placeholder: "EX: 8145376 SDS",
    },
    {
      inputType: "text",
      name: "cpf",
      title: "CPF",
      placeholder: "Ex: 104.898.843-98",
    },

    {
      inputType: "text",
      name: "endereco",
      title: "ENDEREÇO",
      placeholder: "Ex: rua Araripina N 10, Centro",
    },
  ],
];

export const objetosSchema = [
  [
    
    {
      inputType: "select",
      name: "tipo",
      title: "Tipo de objeto",
      placeholder: "Escolha o tipo do objeto",
      required: true,
      options: [
        
        {
          value: "ALIMENTOS / BEBIDAS / AFINS",
          label: "ALIMENTOS / BEBIDAS / AFINS",
        
        },
        {
          value: "ARMA DE FOGO",
          label: "ARMA DE FOGO",
         
        },
       
        {
          value: "ARMA BRANCA",
          label: "ARMA BRANCA",
        
        },
        {
          value: "ARMA DE PRESSAO",
          label: "ARMA DE PRESSAO",
      
        },
        {
          value: "BICICLETA",
          label: "BICICLETA",
          
        },
        {
          value: "AUDIO / FOTO / VIDEO / AFINS",
          label: "AUDIO / FOTO / VIDEO / AFINS",
          
        },
        {
          value: "BOLSA / MALA E SIMILAR",
          label: "BOLSA / MALA E SIMILAR",
       
        },
        {
          value: "BIJUTERIA",
          label: "BIJUTERIA",
      
        },
        {
          value: "BRINQUEDOS / JOGOS",
          label: "BRINQUEDOS / JOGOS",
          
        },
        {
          value: "CARROCA",
          label: "CARROCA",
        },
        {
          value: "CARTAO",
          label: "CARTAO",
     
        },
        {
          value: "CARTEIRA PORTA CEDULA",
          label: "CARTEIRA PORTA CEDULA",
        
        },
     
        {
          value: "4CELULAR",
          label: "CELULAR",
       
        },
        {
          value: "CHAVE",
          label: "CHAVE",
          
        },
        {
          value: "CHEQUE FOLHA",
          label: "CHEQUE FOLHA",
       
        },
        {
          value: "CIGARRO",
          label: "CIGARRO",
     
        },
        {
          value: "CHEQUE TALAO",
          label: "CHEQUE TALAO",
        },
        {
          value: "COMPROVANTE DE PAGAMENTO",
          label: "COMPROVANTE DE PAGAMENTO",
         
        },
        {
          value: "COMBUSTIVEL",
          label: "COMBUSTIVEL",
         
        },
        {
          value: "DOCUMENTO",
          label: "DOCUMENTO",
      
        },
        {
          value: "COSMETICO E SIMILAR",
          label: "COSMETICO E SIMILAR",
         
        },
        {
          value: "DOCUMENTO DE VEICULO",
          label: "DOCUMENTO DE VEICULO",
       
        },
        {
          value: "ELETRODOMESTICOS",
          label: "ELETRODOMESTICOS",
         
        },
        {
          value: "EMBALAGEM(NS)",
          label: "EMBALAGEM(NS)",
        
        },
        {
          value: "ENTORPECENTE",
          label: "ENTORPECENTE",
         
        },
        {
          value: "ESPORTE / LAZER / AFINS",
          label: "ESPORTE / LAZER / AFINS",
       
        },
        {
          value: "58EQUIPAMENTOS DE PROTECAO/AFINS",
          label: "EQUIPAMENTOS DE PROTECAO/AFINS",
      
        },
        {
          value: "GARRAFAO DE AGUA MINERAL",
          label: "GARRAFAO DE AGUA MINERAL",
     
        },
        {
          value: "FERRAMENTAS / AFINS",
          label: "FERRAMENTAS / AFINS",
        
        },
      
       {  value: "INSTRUMENTO CONTUNDENTE",
          label: "INSTRUMENTO CONTUNDENTE",
          
        },
        {
          value: "JOIA",
          label: "JOIA",
         
        },
        {
          value: "INSTRUMENTO MUSICAL",
          label: "INSTRUMENTO MUSICAL",
      
        },
        {
          value: "MEIO DE TRANSPORTE",
          label: "MEIO DE TRANSPORTE",
      
        },
        {
          value: "MOBILIARIO / AFINS",
          label: "MOBILIARIO / AFINS",
     
        },
        {
          value: "MOEDA",
          label: "MOEDA",
       
        },
        {
          value: "MUNICAO/ACESSÓRIOS/PEÇAS PARA ARMAS DE FOGO",
          label: "MUNICAO/ACESSÓRIOS/PEÇAS PARA ARMAS DE FOGO",
      
        },
        {
          value: "OCULOS",
          label: "OCULOS",
    
        },
        {
          value: "OUTROS TIPO DE OBJETO",
          label: "OUTROS TIPO DE OBJETO",
        
        },
        {
          value: "PROD AGROPECUARIO",
          label: "PROD AGROPECUARIO",
     
        },
        {
          value: "PROD AUTOMOTIVO",
          label: "PROD AUTOMOTIVO",
          
        },
        {
          value: "PROD CONSTRUCAO",
          label: "PROD CONSTRUCAO",
        
        },
        {
          value: "PROD DE TELECOMUNICAÇÃO",
          label: "PROD DE TELECOMUNICAÇÃO",
   
        },
        {
          value: "PROD ELETRICO",
          label: "PROD ELETRICO",
      
        },
        {
          value: "PROD ELETROPORTATEIS/ELETRÔNICO",
          label: "PROD ELETROPORTATEIS/ELETRÔNICO",
       
        },
        {
          value: "PROD FARMACEUTICO/HOSPITALAR",
          label: "PROD FARMACEUTICO/HOSPITALAR",
  
        },
        {
          value: "PROD HIDRAULICO",
          label: "PROD HIDRAULICO",
    
        },
        {
          value: "PROD HIGIENE / LIMPEZA",
          label: "PROD HIGIENE / LIMPEZA",
   
        },
        {
          value: "PROD LIVRARIA / PAPELARIA",
          label: "PROD LIVRARIA / PAPELARIA",

        },
        {
          value: "PROD INFORMATICA",
          label: "PROD INFORMATICA",
   
        },
       
        {
          value: "PROD QUIMICO",
          label: "PROD QUIMICO",
      
        },
        {
          value: "PROD TEXTIL",
          label: "PROD TEXTIL",
    
        },
        {
          value: "PRODUTO EXPLOSIVO",
          label: "PRODUTO EXPLOSIVO",
      
        },
        {
          value: "REINO ANIMAL",
          label: "REINO ANIMAL",
     
        },
        {
          value: "REINO VEGETAL",
          label: "REINO VEGETAL",
      
        },
        {
          value: "REINO MINERAL",
          label: "REINO MINERAL",

        },
        {
          value: "RELOGIO",
          label: "RELOGIO",

        },
        {
          value: "UTENSILIOS DOMESTICO",
          label: "UTENSILIOS DOMESTICO",
        
        },
      
        
        {
          value: "VEICULO",
          label: "VEICULO",
       
        },
        {
          value: "VESTUARIO / CALCADOS / AFINS",
          label: "VESTUARIO / CALCADOS / AFINS",
       
        },
      ],
    },
    
    {
      inputType: "text",
      name: "modelo",
      title: "Marca/Modelo",
      placeholder: "EX: Taurus PT100",
    },
  
    {
      inputType: "text",
      name: "nserie",
      title: "Número de série",
      placeholder: "Ex: 123484",
    },

    {
      inputType: "text",
      name: "motivo",
      title: "Motivo do registro do objeto ?",
      placeholder: "Qual o motivo do registro do objeto ?",
    },

    {
      inputType: "text",
      name: "qtd_objeto",
      title: "Quantidade Objeto",
      placeholder: "Ex: 2 kg",
    },

    {
      inputType: "text",
      name: "vlr_objeto",
      title: "Valor objeto",
      placeholder: "Valor do objeto",
    },

    {
      inputType: "text",
      name: "envolvido",
      title: "Envolvido",
      placeholder: "Envolvido 1 ",
    },
  ],
];

export const veiculoSchema = [
  [
    {
      inputType: "text",
      name: "cor",
      title: "Cor",
      placeholder: "Ex: Preto",
      required: false,
    },

    {
      inputType: "text",
      name: "marca",
      title: "Marca",
      placeholder: "Ex: GOl",
      required: false,
    },

    {
      inputType: "text",
      name: "ano",
      title: "Ano",
      placeholder: "Ano",
    },

    {
      inputType: "text",
      name: "renavam",
      title: "Renavam",
      placeholder: "Renavam",
    },

    {
      inputType: "text",
      name: "placa",
      title: "Placa",
      placeholder: "Placa",
    },

    {
      inputType: "text",
      name: "chassi",
      title: "Chassi",
      placeholder: "Chassi",
    },

    {
      inputType: "text",
      name: "uf",
      title: "UF",
      placeholder: "UF",
    },


    {
      inputType: "text",
      name: "envolvido",
      title: "Envolvido",
      placeholder: "Envolvido 1 ",
    },
  ],
];

export const historicoSchema = [
  [
    {
      inputType: "textLongo",
      name: "historico",
      title: "Dados Complementares",
      placeholder: "Descrição do fato",
    },
  ],
];


