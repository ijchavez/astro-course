import { faker } from '@faker-js/faker';

export async function getCopyright() {
  return `© ${new Date().getFullYear()} Astro Course Files`;
}

export async function getUserSample() {
  return {
    id: faker.vehicle.vin(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: faker.image.avatarGitHub(),
  };
}