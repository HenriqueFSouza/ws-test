export type CarsListItem = {
  id: number;
  timestamp_cadastro?: number;
  modelo_id?: number;
  ano: number | null;
  combustivel: string;
  num_portas: number
  cor: string;
  nome_modelo: string;
  valor: number;
  brand: number;
}