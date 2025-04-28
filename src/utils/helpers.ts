import { appName } from './constants';

export const getPageTitle = (value?: string) => {
  if (!value) return appName;
  return `${value} | ${appName}`;
};

export const getBaseUrl = () => {
  const config = useRuntimeConfig();
  return config.public.baseUrl || '/';
};

export function randomizeArray<T>(array: T[]): T[] {
  // Create a copy of the array to avoid mutating the original array
  const randomizedArray = [...array];

  // Fisher-Yates (Knuth) Shuffle Algorithm
  for (let i = randomizedArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    // Swap the current element with a random element
    [randomizedArray[i], randomizedArray[randomIndex]] = [randomizedArray[randomIndex], randomizedArray[i]];
  }

  return randomizedArray;
}
