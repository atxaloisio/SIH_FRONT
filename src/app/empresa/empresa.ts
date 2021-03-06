export interface EmpresaFilter {
  id: string;
  cnpj: string;
  razao_social: string;
  nome_fantasia: string;
}

export class Empresa {
  constructor(
    public id: number = null,
    public codigo_empresa: number = null,
    public codigo_empresa_integracao: string = '',
    public cnpj: string = '',
    public razao_social: string = '',
    public nome_fantasia: string = '',
    public logradouro: string = '',
    public endereco: string = '',
    public endereco_numero: string = '',
    public complemento: string = '',
    public bairro: string = '',
    public cidade: string = '',
    public estado: string = '',
    public cep: string = '',
    public codigo_pais: string = '',
    public data_adesao_sn: Date = null,
    public telefone1_ddd: string = '',
    public telefone1_numero: string = '',
    public telefone2_ddd: string = '',
    public telefone2_numero: string = '',
    public fax_ddd: string = '',
    public fax_numero: string = '',
    public email: string = '',
    public website: string = '',
    public cnae: string = '',
    public cnae_municipal: string = '',
    public inscricao_estadual: string = '',
    public inscricao_municipal: string = '',
    public inscricao_suframa: string = '',
    public regime_tributario: string = '',
    public inativa: string = '',
    public gera_nfse: string = '',
    public optante_simples_nacional: string = '',
    public app_key: string = '',
    public app_secret: string = '',
    public created_at: string = '',
    public updated_at: string = ''
  ) {}
}
