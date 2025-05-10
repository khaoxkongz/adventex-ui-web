import type { NextConfig } from "next"
import { withPayload } from "@payloadcms/next/withPayload"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {},
}

export default withPayload(nextConfig)
