# 🔐 API Security Testing with Postman

This project provides an automation-ready setup to **identify and test for all OWASP API Security Top 10 vulnerabilities using  [CrAPI App](https://github.com/OWASP/www-project-crapi/blob/main/index.md)** using a curated Postman collection and environment. It integrates with [Newman](https://www.npmjs.com/package/newman) to enable command-line execution and continuous integration.

## 📦 Deploy Vulnerable API – CrAPI (Completely Ridiculous API)

Before running the security tests, deploy the intentionally vulnerable **CrAPI** application locally using Docker.

### 🐳 Prerequisites

- Docker and Docker Compose installed
- Ports `8080` and `8090` should be free

### ▶️ Steps to Deploy

1. Clone the official CrAPI repo:

git clone https://github.com/OWASP/crAPI.git

cd crAPI

## 🎯 Testing OWASP API Security Top 10 (2023)

The test collection includes scenarios designed to validate all **OWASP API Top 10 vulnerabilities**:

| #             | OWASP Category                                | Description                                                                 |
|---------------|-----------------------------------------------|-----------------------------------------------------------------------------|
| **API1:** | Broken Object Level Authorization             | Ensures proper access control on object-level operations                    |
| **API2:** | Broken Authentication                         | Tests for missing, weak, or improperly implemented auth mechanisms          |
| **API3:** | Broken Object Property Level Authorization    | Checks for overexposure of properties and field-level access                |
| **API4:** | Unrestricted Resource Consumption             | Validates rate limiting, size limits, and resource abuse                    |
| **API5:** | Broken Function Level Authorization           | Tests access to sensitive functions based on user roles                     |
| **API6:** | Unrestricted Access to Sensitive Business Flows | Detects exposed endpoints bypassing business logic controls               |
| **API7:** | Server Side Request Forgery (SSRF)            | Attempts to force backend HTTP requests to internal services                |
| **API8:** | Security Misconfiguration                     | Identifies exposed headers, verbose error messages, and open debug modes    |
| **API9:** | Improper Inventory Management                 | Assesses for undocumented or deprecated endpoints                           |
| **API10:**| Unsafe Consumption of APIs                    | Verifies input validation when consuming third-party services               |

Each test is tagged and structured to make it easier to trace, debug, and extend.

## 🚀 Getting Started

### 1. Clone the Repository

git clone https://github.com/your-username/API-SecurityTesting-main.git
cd API-Sec

### 2. Install Dependencies
Ensure Node.js is installed.

npm install

### 3. Run the Tests
node runCollection.js

You can customize the script to include reporters like html, cli, or junit.


