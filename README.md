## Bem-vindo ao Cars List App

### Descrição

Navegando pelo App você encontrará duas principais páginas, a primeira de Listagem de veículos e a segunda de Cadastro de novos veículos que podem ser acessadas através do menu superior.
Fique a vontade para explorar a aplicação. Visualize os veículos que já temos cadastrados e cadastre os seus favoritos, um detalhe, esta aplicação funciona tanto no versão Desktop quanto na versão Mobile.

### Conceitos Técnicos 

## Listagem de Veículos

Esta página é dedicada para a listagem de veículos. Definada como "CarsLsiting", tem o intuito de agregar os veículos que são da mesma fabricante em um único card e exibir as informações básicas deste veículo
Nome, Ano de fabricação e Cor.

Ao acessar o site pela primeira vez, está pagina realiza uma busca na api da WS Work para receber os dados dos veículos já existentes. Em seguida, faz a persistência desses dados através da "ContextAPI" do React.js no navegador do usuário(LocalStorage) para que ele possa futuramente adicionar mais carros à esta lista pela página de "Novo Carro".

O componente `CarsListing` é responsável por exibir receber os dados dos veículos e exbir em tela. Este componente pode ser reutilzado em qualquer outra nova página da aplicação e aqui está os pontos que você deve se atentar ao implementar ele em outra página

O componente `CarsListing` espera uma prop:
  - `carsList`: Um objeto onde a chave é o ID da marca (um número) e o valor é um array de objetos do tipo `CarsListItem`.

### Tipo `CarsListItem`

O tipo `CarsListItem` representa um carro e possui as seguintes propriedades:

- `id`: Número único que identifica o carro.
- `timestamp_cadastro`: Timestamp do cadastro do carro.
- `modelo_id`: ID do modelo do carro.
- `ano`: Ano do carro.
- `combustivel`: Tipo de combustível do carro.
- `cor`: Cor do carro.
- `nome_modelo`: Nome do modelo do carro.
- `valor`: Valor do carro.
- `brand`: ID da marca do carro.

A partir disso, o componente lida com todo o restante:

- Mensagem apropriada para qunado não existe veículos pré-cadastrados
- Agrupamento correto dos dados
- Exibição dos veículos separados pelo nome da fabricante

Atente-se a função `getBrandName` que vai te retornar o nome da marca a partir do código respectivo que está alocado na prorpiedade `brand` de cada carro.

## Cadastro de Novos Veículos

Esta página é dedicada ao cadastro de novos veículos. Ela permite ao usuário adicionar novos carros à lista existente, preenchendo um formulário com os detalhes do veículo. Esta funcionalidade é crucial para manter a lista de veículos atualizada e personalizável pelo usuário.

O formulário é responsável por gerenciar os dados de cadastro de novos veículos. Ele lida com a entrada do usuário, formatação dos valores e a persistência dos dados no estado global da aplicação. Campos que o usuário deve preencher para cadastrar um novo carro:

- Nome do Modelo
- Ano de Fabricação
- Cor
- Combustivel (selecionada a partir de um menu suspenso)
- Marca (selecionada a partir de um menu suspenso)
- Valor

Após realizar o cadastro o usuário é redirecionado para a página de Listagem de Veículos para que ele possa ver o veículos recém cadastrado

## Clonagem do projeto

A partir da clonagem do projeto, você deverá executar os seguintes comandos no seu terminal

### `npm install`
### `npm start`

Uma nova aba do seus navegador será aberta com o projeto e você poderá personalizar de acordo com o que preferir

### Link para o deploy da aplcação no Heroku: https://ws-test-8ac7e2d8eb7a.herokuapp.com/


