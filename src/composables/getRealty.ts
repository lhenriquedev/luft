import { ref } from "vue";

interface RealtiesProps {
  id: number;
  image: string;
  type: string;
  price: string;
  address: string;
  region: string;
  area: number;
  bedrooms: number;
  vacancies: number;
  isFavorited: boolean;
}

const getRealties = (id: number) => {
  const realty = ref<RealtiesProps>();
  const errors = ref(null);

  const loadRealties = async () => {
    try {
      const data = await fetch("http://localhost:3000/realties" + id);
      if (!data.ok) throw Error("Erro ao pegar dados de imoveis");
      realty.value = await data.json();
    } catch (err: any) {
      errors.value = err.message;
    }
  };

  return { realty, errors, loadRealties };
};

export default getRealties;
