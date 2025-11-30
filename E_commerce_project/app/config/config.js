// Server Configuration
export const PORT = process.env.PORT || 5050;

// MongoDB Connection - Use environment variable for production
export const DATABASE = process.env.MONGODB_URI || "mongodb://localhost:27017/MernEcommerce";

// JWT Configuration
export const JWT_KEY = process.env.JWT_KEY || "development_secret_key";
export const JWT_EXPIRE_TIME = parseInt(process.env.JWT_EXPIRE_TIME) || 30 * 24 * 60 * 60;

// Email Configuration
export const EMAIL_HOST = process.env.EMAIL_HOST || "mail.teamrabbil.com";
export const EMAIL_PORT = parseInt(process.env.EMAIL_PORT) || 25;
export const EMAIL_SECURITY = process.env.EMAIL_SECURITY === "true";
export const EMAIL_USER = process.env.EMAIL_USER || "info@teamrabbil.com";
export const EMAIL_PASS = process.env.EMAIL_PASS || "";
export const EMAIL_UN_AUTH = process.env.EMAIL_UN_AUTH === "true";

// Application Settings
export const WEB_CACHE = process.env.WEB_CACHE === "true";
export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE || "10MB";
export const URL_ENCODE = process.env.URL_ENCODE !== "false";

export const REQUEST_TIME = parseInt(process.env.REQUEST_TIME) || 20 * 60 * 1000;
export const REQUEST_NUMBER = parseInt(process.env.REQUEST_NUMBER) || 2000;

// Payment Gateway Configuration
export const STORE_ID = process.env.STORE_ID || "";
export const STORE_PASSWORD = process.env.STORE_PASSWORD || "";
export const CURRENCY = process.env.CURRENCY || "BDT";
export const SUCCESS_URL = process.env.SUCCESS_URL || "";
export const FAIL_URL = process.env.FAIL_URL || "";
export const CANCEL_URL = process.env.CANCEL_URL || "";
export const INIT_URL = process.env.INIT_URL || "";







