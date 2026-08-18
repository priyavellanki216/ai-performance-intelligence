# AI Employee Performance Intelligence Platform

An AI-assisted HR technology platform that analyzes employee performance data and feedback to generate evidence-linked performance-review drafts for human approval.

## Overview

The AI Employee Performance Intelligence Platform combines structured HR data, Large Language Models, backend APIs, relational data modelling, caching, and automated validation to assist HR teams and managers with performance-review preparation.

The system is designed around a human-in-the-loop workflow: AI generates review drafts, while final approval remains with the responsible human reviewer.

## Key Features

* Employee performance data processing
* Feedback analysis
* AI-assisted performance-review generation
* Evidence-linked review drafts
* Human approval workflow
* LLM-powered analysis
* Structured AI outputs
* Validation gates
* PostgreSQL data modelling
* Redis caching
* REST APIs
* Automated backend testing
* React frontend
* AWS deployment

## Architecture

```text
React Frontend
       |
       v
Django / FastAPI Backend
       |
   +---+-------------------+
   |                       |
   v                       v
PostgreSQL               Redis
   |
   v
Employee & Feedback Data
   |
   v
AI Processing Workflow
   |
   +----------------------+
   |                      |
   v                      v
LangChain             OpenAI API
   |                      |
   +----------+-----------+
              |
              v
     Generated Review Draft
              |
              v
        Validation Gates
              |
              v
       Human Approval
```

## Technology Stack

### Backend

* Python
* Django
* FastAPI
* REST APIs

### AI / Generative AI

* LangChain
* OpenAI API
* LLMs
* NLP
* Prompt Engineering
* AI Workflows

### Database & Caching

* PostgreSQL
* Redis
* SQL
* Data Modelling

### Frontend

* React
* JavaScript
* HTML5
* CSS3

### Cloud & DevOps

* AWS
* Docker
* Git
* CI/CD

## Engineering Highlights

* Built backend services for processing employee performance records and feedback.
* Designed PostgreSQL data models for employee, feedback, performance, and review workflows.
* Developed LangChain and OpenAI-powered workflows for generating evidence-linked performance-review drafts.
* Implemented validation gates to reduce unsupported AI-generated content.
* Added human approval before generated drafts are released as final reviews.
* Implemented Redis caching to reduce repeated AI processing.
* Developed automated tests covering critical backend workflows.
* Deployed decoupled Python and React application components on AWS.

## Evaluation

The AI workflow was evaluated against a benchmark HR dataset.

Evaluation areas included:

* Factual consistency
* Evidence alignment
* Structured output quality
* Validation behavior
* API latency
* Backend test coverage

The system achieved:

* 94.6% factual consistency against the benchmark HR dataset
* 87% automated test coverage for critical backend workflows
* 150 ms p50 API latency
* 310 ms p95 API latency under reproducible load testing

## Human-in-the-Loop Design

AI-generated performance reviews can introduce unsupported claims or incorrect interpretations.

To reduce this risk, the system follows a human-in-the-loop architecture:

```text
HR Data
   |
   v
Data Processing
   |
   v
LLM Analysis
   |
   v
Draft Performance Review
   |
   v
Validation
   |
   v
Human Review
   |
   +---- Reject / Edit
   |
   +---- Approve
            |
            v
       Final Draft
```

This design keeps the AI system focused on decision support rather than fully automated employee evaluation.

## Project Structure

```text
ai-employee-performance-platform/
│
├── backend/
│   ├── api/
│   ├── services/
│   ├── models/
│   ├── schemas/
│   └── ai/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── tests/
│
├── evaluation/
│
├── requirements.txt
├── README.md
└── .gitignore
```

## Running Locally

### Clone

```bash
git clone https://github.com/priyavellanki216/ai-employee-performance-platform.git
cd ai-employee-performance-platform
```

### Install dependencies

```bash
pip install -r requirements.txt
```

### Environment Variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_postgresql_connection_string
REDIS_URL=your_redis_connection_string
```

Never commit credentials or API keys.

### Start Backend

```bash
uvicorn main:app --reload
```

### Start Frontend

```bash
npm install
npm run dev
```

## Example Workflow

```text
Employee Performance Data
          |
          v
   Feedback Processing
          |
          v
     Data Validation
          |
          v
    AI / LLM Workflow
          |
          v
Evidence-Linked Review Draft
          |
          v
      Validation
          |
          v
     Human Approval
```

## Design Considerations

### Human Oversight

The system does not treat an LLM-generated review as the final decision. Human approval is required before release.

### Structured Output

AI responses are validated against expected structures before being passed to downstream application workflows.

### Performance

Redis caching is used to avoid unnecessary repeated processing for repeated or unchanged requests.

### Testability

Critical backend workflows are covered through automated tests to validate API behavior and core business logic.

## Future Improvements

* Role-based access control
* Employee self-service dashboards
* Advanced feedback sentiment analysis
* Performance trend visualization
* Multi-model evaluation
* Automated anomaly detection
* Background processing for large datasets
* Audit logging
* Enterprise authentication
* Integration with HRIS platforms

## Disclaimer

This project is intended as an AI engineering and HR technology demonstration. AI-generated performance-review content should be reviewed by qualified human decision-makers before being used in employment decisions.

## Author

Vellanki Lakshmi Priya

Software Development Engineer | Python | FastAPI | LLMs | RAG | PostgreSQL | Redis | AWS

GitHub: https://github.com/priyavellanki216
