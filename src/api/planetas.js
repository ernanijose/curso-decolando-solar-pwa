export default class ApiPlanetas {
  static async obterUnicoPorSlug(slug) {
    let response = await this.obter({
      condicoes: {
        slug: slug,
      },
    });

    return response;
  }

  static async obterTodos() {
    let response = await this.obter({
      condicoes: {},
    });

    return response;
  }

  static async obter(json) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(json),
      redirect: "follow",
    };

    try {
      var response = await fetch(
        "https://sistemasolar.docapi.dev/planetas/obter",
        requestOptions
      );
      var responseJson = await response.json();
      if (response.ok) {
        // Requisão foi um sucesso!
        // A partir desse trecho você pode implementar o seu codigo que irá pegar os dados da api e colocar no front-end por exemplo.
        // console.log(responseJson);
        return responseJson?.resposta || responseJson;
      } else {
        throw new Error(response);
      }
    } catch (error) {
      console.error(error);
      console.log("Error: ", error);
      throw error;
    }
  }
}
