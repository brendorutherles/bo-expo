export const formSchema = [
  {
    inputType: "text",
    name: "mike",
    title: "N do MIKE",
    placeholder: "NÚMERO DA OCORRÊNCIA ",
  },
  {
    inputType: "text",
    name: "matricula",
    title: "Matrícula",
    placeholder: "MATRÍCULA DO CONDUTOR",
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
    inputType: "text",
    name: "responsavel",
    title: "RESPONSÁVEL",
    placeholder: "CONDUTOR DA OCORRÊNCIA",
  },

  {
    inputType: "text",
    name: "tipoOcorr",
    title: "Descrição da Natureza	",
    placeholder: "Ex: Furto ,Roubo ",
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
    inputType: "select",
    name: "teste",
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
    placeholder: "Ex: 10:20",
  },

  {
    inputType: "text",
    name: "dataFato",
    title: "Data do fato",
    placeholder: "DATA DO FATO",
  },

  {
    inputType: "text",
    name: "pagina",
    title: "Quantidade de Paginas",
    placeholder: "EX : 4 ",
  },

  /**Dados Pessoais da vitima */
];

export const personSchema = [
  [
    {
      inputType: "text",
      name: "tipo",
      title: "Tipo Envolvido",
      placeholder: "Ex: Vitima,Imputado,Testemunha",
    },

    {
      inputType: "text",
      name: "tipo",
      title: "Tipo Envolvido",
      placeholder: "Ex: Vitima,Imputado,Testemunha",
    },

    {
      inputType: "select",
      name: "teste",
      title: "testeeeeeeee",
      placeholder: "Ex: Vitima,Imputado,Testemunha",
    },

    {
      inputType: "text",
      name: "nome",
      title: "Nome",
      placeholder: "Nome Completo",
    },
    {
      inputType: "text",
      name: "sexo",
      title: "Sexo",
      placeholder: "Ex: Masculino",
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
      inputType: "text",
      name: "tipo",
      title: "Tipo Objeto",
      placeholder: "Ex: Arma de Fogo, Calibre 12 ...",
    },

    {
      inputType: "text",
      name: "modelo",
      title: "Marca / Modelo",
      placeholder: "Ex: Apple, Iphone ",
      required: false,
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

export const cadastroSchema = [
  [
    {
      inputType: "select",
      name: "tipoOcorr",
      title: "Tipo de Ocorrência",
      placeholder: "",
      options: [
        { value: "40", label: "AMEAÇA" },
        { value: "81", label: "ATO / ESCRITO / OBJETO OBSCENO" },
        { value: "100", label: "APROPRIAÇÃO INDÉBITA" },
        { value: "101", label: "DANO / DEPREDAÇÃO" },
        { value: "102", label: "ESTELIONATO / FRAUDE" },
        { value: "107", label: "POSSE / INVASÃO DE PROPRIEDADE" },
        { value: "141", label: "CALUNIA / DIFAMAÇÃO / INJURIA" },
        { value: "142", label: "CONSTRANGIMENTO ILEGAL" },
        { value: "146", label: "VIAS DE FATO / RIXA" },
        { value: "147", label: "VIOLAÇÃO DE DOMICÍLIO" },
        {
          value: "161",
          label: "PERTURBAÇÃO DO SOSSEGO / TRANQUILIDADE PÚBLICA",
        },
        { value: "183", label: "DESACATO" },
        {
          value: "222",
          label: "FAZER COBRANÇA DE DIVIDAS DE MANEIRA AMEAÇADORA",
        },
        { value: "240", label: "FALSA IDENTIDADE / FALSIDADE IDEOLÓGICA " },
        { value: "280", label: "ACIDENTE DE TRÂNSITO SEM VÍTIMA" },
        { value: "300", label: "EXTRAVIO" },
        { value: "310", label: "CRIMES CONTRA AS RELAÇÕES DE CONSUMO" },
        {
          value: "313",
          label: "EXERCÍCIO ILEGAL DA MEDICINA, ARTE DENTÁRIA OU FARMACÊUTICA",
        },
        { value: "320", label: "CRUELDADE CONTRA ANIMAIS" },
        { value: "321", label: "EXERCÍCIO ARBITRÁRIO DAS PRÓPRIAS RAZÕES" },
        { value: "334", label: "VIAS DE FATO" },
        { value: "336", label: "CALÚNIA" },
        { value: "337", label: "DIFAMAÇÃO" },
        { value: "346", label: "DESENTENDIMENTO/DISCUSSÃO" },
        { value: "356", label: "INJURIA QUALIFICADA RACIAL" },
        { value: "359", label: "ROUBO A TRANSEUNTE" },
        { value: "360", label: "ROUBO A ÔNIBUS" },
        { value: "361", label: "ROUBO A OUTROS TRANSPORTES COLETIVOS" },
        { value: "362", label: "ROUBO EM RESIDÊNCIA" },
        {
          value: "363",
          label: "ROUBO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS",
        },
        { value: "365", label: "ROUBO A OUTRAS INSTITUIÇÕES FINANCEIRAS" },
        {
          value: "366",
          label: "ROUBO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA)",
        },
        { value: "369", label: "OUTROS ROUBOS" },
        { value: "370", label: "FURTO A TRANSEUNTE" },
        { value: "371", label: "FURTO EM RESIDÊNCIA" },
        {
          value: "372",
          label: "FURTO EM ESTABELECIMENTO COMERCIAL OU DE SERVIÇOS",
        },
        { value: "374", label: "FURTO A OUTRAS INSTITUIÇÕES FINANCEIRAS" },
        {
          value: "376",
          label: "FURTO (SAÍDA DE BANCO/INSTITUIÇÃO FINANCEIRA)",
        },
        { value: "378", label: "OUTROS FURTOS" },
        { value: "382", label: "AMEAÇA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
        { value: "384", label: "CALÚNIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
        { value: "388", label: "DIFAMAÇÃO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
        { value: "395", label: "INJÚRIA POR VIOLÊNCIA DOMÉSTICA/FAMILIAR" },
        {
          value: "404",
          label: "DIFERENÇA DE FLUXO  CAIXA EM INST. FIN. OU TRANSP DE VALORES",
        },
        { value: "416", label: "INVASÃO DE DISPOSITIVO INFORMÁTICO" },
        {
          value: "499",
          label: "CÁRCERE PRIVADO POR VIOLÊNCIA DOMÉSTICA/FAMILIAR",
        },
        {
          value: "491",
          label: "DESCUMPRIMENTO DE MEDIDA PROTETIVA DE URGÊNCIA",
        },
      ],
    },
    {},
  ],
];
