import { supabase } from "../libs/database"

export const getCountries = async () => supabase.from('countries').select(`id, name`);

type CountriesResponse = Awaited<ReturnType<typeof getCountries>>

export type CountriesResponseSuccess = CountriesResponse['data']
export type CountriesResponseError = CountriesResponse['error']