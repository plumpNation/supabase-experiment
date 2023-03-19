import { FC, useEffect, useState } from 'react';

import { getCountries } from '../services/countries';

import type { Country } from '../libs/database.types';

export const Countries: FC = () => {
  const [countries, setCountries] = useState<Country[] | null>(null);

  useEffect(() => {
    getCountries().then((countries) => setCountries(countries.data));
  }, []);

  return (
    <ul>
      {(countries || []).map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}