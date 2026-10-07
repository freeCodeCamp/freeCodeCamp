import { execFile } from 'node:child_process';
import { readFile, readdir } from 'node:fs';
import * as os from 'node:os';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { defineIntegration, safeSetSpanJSONAttributes } from '@sentry/core';

const readFileAsync = promisify(readFile);
const readDirAsync = promisify(readdir);
const INTEGRATION_NAME = "Context";
const _nodeContextIntegration = ((options = {}) => {
  const _options = {
    app: true,
    os: true,
    device: true,
    culture: true,
    cloudResource: true,
    ...options
  };
  const appContext = _options.app ? getAppContext() : void 0;
  const deviceContext = _options.device ? getDeviceContext(_options.device) : void 0;
  const cultureContext = _options.culture ? getCultureContext() : void 0;
  const cloudResourceContext = _options.cloudResource ? getCloudResourceContext() : void 0;
  const osContextPromise = _options.os ? getOsContext() : void 0;
  const cachedSpanAttributes = {
    "process.runtime.engine.name": "v8",
    "process.runtime.engine.version": process.versions.v8,
    ...contextsToSpanAttributes({
      app: appContext,
      device: deviceContext,
      culture: cultureContext,
      cloud_resource: cloudResourceContext
    })
  };
  if (osContextPromise) {
    osContextPromise.then((osCtx) => Object.assign(cachedSpanAttributes, contextsToSpanAttributes({ os: osCtx }))).catch(() => {
    });
  }
  const contextsPromise = (async () => {
    const contexts = {};
    if (osContextPromise) {
      contexts.os = await osContextPromise;
    }
    if (appContext) {
      contexts.app = appContext;
    }
    if (deviceContext) {
      contexts.device = deviceContext;
    }
    if (cultureContext) {
      contexts.culture = cultureContext;
    }
    if (cloudResourceContext) {
      contexts.cloud_resource = cloudResourceContext;
    }
    return contexts;
  })();
  async function addContext(event) {
    const updatedContext = _updateContext(await contextsPromise);
    event.contexts = {
      ...event.contexts,
      app: { ...updatedContext.app, ...event.contexts?.app },
      os: { ...updatedContext.os, ...event.contexts?.os },
      device: { ...updatedContext.device, ...event.contexts?.device },
      culture: { ...updatedContext.culture, ...event.contexts?.culture },
      cloud_resource: { ...updatedContext.cloud_resource, ...event.contexts?.cloud_resource }
    };
    return event;
  }
  return {
    name: INTEGRATION_NAME,
    processEvent(event) {
      return addContext(event);
    },
    processSegmentSpan(span) {
      safeSetSpanJSONAttributes(span, cachedSpanAttributes);
      safeSetSpanJSONAttributes(span, getDynamicSpanAttributes(appContext, deviceContext));
    }
  };
});
const nodeContextIntegration = defineIntegration(_nodeContextIntegration);
function _updateContext(contexts) {
  if (contexts.app?.app_memory) {
    contexts.app.app_memory = process.memoryUsage().rss;
  }
  if (contexts.app?.free_memory && typeof process.availableMemory === "function") {
    const freeMemory = process.availableMemory?.();
    if (freeMemory != null) {
      contexts.app.free_memory = freeMemory;
    }
  }
  if (contexts.device?.free_memory) {
    contexts.device.free_memory = os.freemem();
  }
  return contexts;
}
function contextsToSpanAttributes(contexts) {
  const attrs = {};
  const { app, device, os: osCtx, culture, cloud_resource } = contexts;
  if (app) {
    if (app.app_start_time) {
      attrs["app.start_time"] = app.app_start_time;
    }
  }
  if (device) {
    if (device.arch) {
      attrs["device.archs"] = [device.arch];
    }
    if (device.boot_time) {
      attrs["device.boot_time"] = device.boot_time;
    }
    if (device.memory_size != null) {
      attrs["device.memory_size"] = device.memory_size;
    }
    if (device.processor_count != null) {
      attrs["device.processor_count"] = device.processor_count;
    }
    if (device.cpu_description) {
      attrs["device.cpu_description"] = device.cpu_description;
    }
    if (device.processor_frequency != null) {
      attrs["device.processor_frequency"] = device.processor_frequency;
    }
  }
  if (osCtx) {
    if (osCtx.name) {
      attrs["os.name"] = osCtx.name;
    }
    if (osCtx.version) {
      attrs["os.version"] = osCtx.version;
    }
    if (osCtx.kernel_version) {
      attrs["os.kernel_version"] = osCtx.kernel_version;
    }
    if (osCtx.build) {
      attrs["os.build"] = osCtx.build;
    }
  }
  if (culture) {
    if (culture.locale) {
      attrs["culture.locale"] = culture.locale;
    }
    if (culture.timezone) {
      attrs["culture.timezone"] = culture.timezone;
    }
  }
  if (cloud_resource) {
    for (const [key, value] of Object.entries(cloud_resource)) {
      if (value != null) {
        attrs[key] = value;
      }
    }
  }
  return attrs;
}
function getDynamicSpanAttributes(appContext, deviceContext) {
  const attrs = {};
  if (appContext) {
    attrs["app.memory"] = process.memoryUsage().rss;
    if (typeof process.availableMemory === "function") {
      const freeMemory = process.availableMemory?.();
      if (freeMemory != null) {
        attrs["app.free_memory"] = freeMemory;
      }
    }
  }
  if (deviceContext?.free_memory != null) {
    attrs["device.free_memory"] = os.freemem();
  }
  return attrs;
}
async function getOsContext() {
  const platformId = os.platform();
  switch (platformId) {
    case "darwin":
      return getDarwinInfo();
    case "linux":
      return getLinuxInfo();
    default:
      return {
        name: PLATFORM_NAMES[platformId] || platformId,
        version: os.release()
      };
  }
}
function getCultureContext() {
  try {
    if (typeof process.versions.icu !== "string") {
      return;
    }
    const january = /* @__PURE__ */ new Date(9e8);
    const spanish = new Intl.DateTimeFormat("es", { month: "long" });
    if (spanish.format(january) === "enero") {
      const options = Intl.DateTimeFormat().resolvedOptions();
      return {
        locale: options.locale,
        timezone: options.timeZone
      };
    }
  } catch {
  }
  return;
}
function getAppContext() {
  const app_memory = process.memoryUsage().rss;
  const app_start_time = new Date(Date.now() - process.uptime() * 1e3).toISOString();
  const appContext = { app_start_time, app_memory };
  if (typeof process.availableMemory === "function") {
    const freeMemory = process.availableMemory?.();
    if (freeMemory != null) {
      appContext.free_memory = freeMemory;
    }
  }
  return appContext;
}
function getDeviceContext(deviceOpt) {
  const device = {};
  let uptime;
  try {
    uptime = os.uptime();
  } catch {
  }
  if (typeof uptime === "number") {
    device.boot_time = new Date(Date.now() - uptime * 1e3).toISOString();
  }
  device.arch = os.arch();
  if (deviceOpt === true || deviceOpt.memory) {
    device.memory_size = os.totalmem();
    device.free_memory = os.freemem();
  }
  if (deviceOpt === true || deviceOpt.cpu) {
    const cpuInfo = os.cpus();
    const firstCpu = cpuInfo?.[0];
    if (firstCpu) {
      device.processor_count = cpuInfo.length;
      device.cpu_description = firstCpu.model;
      device.processor_frequency = firstCpu.speed;
    }
  }
  return device;
}
const PLATFORM_NAMES = {
  aix: "IBM AIX",
  freebsd: "FreeBSD",
  openbsd: "OpenBSD",
  sunos: "SunOS",
  win32: "Windows",
  ohos: "OpenHarmony",
  android: "Android"
};
const LINUX_DISTROS = [
  { name: "fedora-release", distros: ["Fedora"] },
  { name: "redhat-release", distros: ["Red Hat Linux", "Centos"] },
  { name: "redhat_version", distros: ["Red Hat Linux"] },
  { name: "SuSE-release", distros: ["SUSE Linux"] },
  { name: "lsb-release", distros: ["Ubuntu Linux", "Arch Linux"] },
  { name: "debian_version", distros: ["Debian"] },
  { name: "debian_release", distros: ["Debian"] },
  { name: "arch-release", distros: ["Arch Linux"] },
  { name: "gentoo-release", distros: ["Gentoo Linux"] },
  { name: "novell-release", distros: ["SUSE Linux"] },
  { name: "alpine-release", distros: ["Alpine Linux"] }
];
const LINUX_VERSIONS = {
  alpine: (content) => content,
  arch: (content) => matchFirst(/distrib_release=(.*)/, content),
  centos: (content) => matchFirst(/release ([^ ]+)/, content),
  debian: (content) => content,
  fedora: (content) => matchFirst(/release (..)/, content),
  mint: (content) => matchFirst(/distrib_release=(.*)/, content),
  red: (content) => matchFirst(/release ([^ ]+)/, content),
  suse: (content) => matchFirst(/VERSION = (.*)\n/, content),
  ubuntu: (content) => matchFirst(/distrib_release=(.*)/, content)
};
function matchFirst(regex, text) {
  const match = regex.exec(text);
  return match ? match[1] : void 0;
}
async function getDarwinInfo() {
  const darwinInfo = {
    kernel_version: os.release(),
    name: "Mac OS X",
    version: `10.${Number(os.release().split(".")[0]) - 4}`
  };
  try {
    const output = await new Promise((resolve, reject) => {
      execFile("/usr/bin/sw_vers", (error, stdout) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
    darwinInfo.name = matchFirst(/^ProductName:\s+(.*)$/m, output);
    darwinInfo.version = matchFirst(/^ProductVersion:\s+(.*)$/m, output);
    darwinInfo.build = matchFirst(/^BuildVersion:\s+(.*)$/m, output);
  } catch {
  }
  return darwinInfo;
}
function getLinuxDistroId(name) {
  return name.split(" ")[0].toLowerCase();
}
async function getLinuxInfo() {
  const linuxInfo = {
    kernel_version: os.release(),
    name: "Linux"
  };
  try {
    const etcFiles = await readDirAsync("/etc");
    const distroFile = LINUX_DISTROS.find((file) => etcFiles.includes(file.name));
    if (!distroFile) {
      return linuxInfo;
    }
    const distroPath = join("/etc", distroFile.name);
    const contents = (await readFileAsync(distroPath, { encoding: "utf-8" })).toLowerCase();
    const { distros } = distroFile;
    linuxInfo.name = distros.find((d) => contents.indexOf(getLinuxDistroId(d)) >= 0) || distros[0];
    const id = getLinuxDistroId(linuxInfo.name);
    linuxInfo.version = LINUX_VERSIONS[id]?.(contents);
  } catch {
  }
  return linuxInfo;
}
function getCloudResourceContext() {
  if (process.env.VERCEL) {
    return {
      "cloud.provider": "vercel",
      "cloud.region": process.env.VERCEL_REGION
    };
  } else if (process.env.AWS_REGION) {
    return {
      "cloud.provider": "aws",
      "cloud.region": process.env.AWS_REGION,
      "cloud.platform": process.env.AWS_EXECUTION_ENV
    };
  } else if (process.env.GCP_PROJECT) {
    return {
      "cloud.provider": "gcp"
    };
  } else if (process.env.ALIYUN_REGION_ID) {
    return {
      "cloud.provider": "alibaba_cloud",
      "cloud.region": process.env.ALIYUN_REGION_ID
    };
  } else if (process.env.WEBSITE_SITE_NAME && process.env.REGION_NAME) {
    return {
      "cloud.provider": "azure",
      "cloud.region": process.env.REGION_NAME
    };
  } else if (process.env.IBM_CLOUD_REGION) {
    return {
      "cloud.provider": "ibm_cloud",
      "cloud.region": process.env.IBM_CLOUD_REGION
    };
  } else if (process.env.TENCENTCLOUD_REGION) {
    return {
      "cloud.provider": "tencent_cloud",
      "cloud.region": process.env.TENCENTCLOUD_REGION,
      "cloud.account.id": process.env.TENCENTCLOUD_APPID,
      "cloud.availability_zone": process.env.TENCENTCLOUD_ZONE
    };
  } else if (process.env.NETLIFY) {
    return {
      "cloud.provider": "netlify"
    };
  } else if (process.env.FLY_REGION) {
    return {
      "cloud.provider": "fly.io",
      "cloud.region": process.env.FLY_REGION
    };
  } else if (process.env.DYNO) {
    return {
      "cloud.provider": "heroku"
    };
  } else {
    return void 0;
  }
}

export { contextsToSpanAttributes, getAppContext, getDeviceContext, getDynamicSpanAttributes, nodeContextIntegration, readDirAsync, readFileAsync };
//# sourceMappingURL=context.js.map
