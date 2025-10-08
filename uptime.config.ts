import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "grep Status",
  links: [
    { link: 'https://grepit.app', label: 'grep', highlight: true },
  ],
  favicon: '/favicon.svg',
  maintenances: {
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'api_health',
      name: 'System Health',
      method: 'GET',
      target: 'https://api.grepit.app/app/health',
      tooltip: 'Main API health check',
      statusPageLink: 'https://api.grepit.app',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'livekit_health',
      name: 'Voice and Video',
      method: 'GET',
      target: 'https://api.grepit.app/app/health/livekit',
      tooltip: 'Voice and video services',
      statusPageLink: 'https://api.grepit.app',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'api_ping',
      name: 'API (Ping)',
      method: 'GET',
      target: 'https://api.grepit.app/app/ping',
      tooltip: 'API ping endpoint',
      statusPageLink: 'https://api.grepit.app',
      responseKeyword: 'pong',
      timeout: 5000,
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
