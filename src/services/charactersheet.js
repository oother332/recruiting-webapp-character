export const getCharacter = async () => {
  const response = await fetch(
    'https://recruiting.verylongdomaintotestwith.ca/api/{oother332}/character',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data.body;
};

export const createCharacter = async (character) => {
  const response = await fetch(
    'https://recruiting.verylongdomaintotestwith.ca/api/{oother332}/character',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    }
  );
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
};
