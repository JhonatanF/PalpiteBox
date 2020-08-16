import React from "react";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <p className="mt-12 text-center">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.
      </p>
      <div className="text-center my-12">
        <Link href="/search">
          <a className="bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow">
            Dar opiniao ou sugestao
          </a>
        </Link>
      </div>
      <p className="my-12 text-center">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </p>
    </div>
  );
};

export default Index;
