import React from "react";
import Link from "next/link";

const Search = () => {
  return (
    <div className="pt-6">
      <h1 className="text-center  font-bold my-4 text-2xl">
        Criticas e Sugestoes
      </h1>
      <p className="text-center mb-6">
        There are many variations of passages of Lorem Ipsum available, but the
        <br />
        majority have suffered alteration in some form, by injected humour.
      </p>
      <div className="w-1/5 mx-auto">
        <label className="text-bold">Seu Nome:</label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className="p-4 block shadow bg-blue-100 my-2 rounded"
        />
      </div>
      <div className="w-1/5 mx-auto">
        <label className="text-bold">Seu E-mail:</label>
        <input
          type="text"
          placeholder="Digite o seu E-mail"
          className="p-4 block shadow bg-blue-100 my-2 rounded"
        />
      </div>
      <div className="w-1/5 mx-auto">
        <label className="text-bold">Sua Sugestao:</label>
        <input
          type="text"
          placeholder="Digite a sua sugestao"
          className="p-4 block shadow bg-blue-100 my-2 rounded"
        />
      </div>
    </div>
  );
};

export default Search;
