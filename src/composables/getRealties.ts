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

const getRealties = () => {
  const realties = ref<RealtiesProps>();
  const errors = ref(null);

  const loadRealties = async () => {
    try {
      const data = await fetch("http://localhost:3000/realties");
      if (!data.ok) throw Error("Erro ao pegar dados de imoveis");
      realties.value = await data.json();
    } catch (err: any) {
      errors.value = err.message;
    }
  };

  return { realties, errors, loadRealties };
};

export default getRealties;
