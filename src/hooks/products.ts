// const baseDataUrl = 'https://test-candidaturas-front-end.onrender.com/families?';
const baseDataUrl = 'https://ch5ujs-8080.csb.app/families?';
const baseImageUrl = 'https://plugin-storage.nyc3.digitaloceanspaces.com/families/images';

export const useProduct = () => {

    const getListProduct = async (skip: number) => {
        const response = await fetch(`${baseDataUrl}skip=${skip}&take=10`);
        const product = await response.json();
        return product
    }

    return {
        getListProduct
    }
}