
# CareerHighMatch.ai - Function Specification v0.1

---

## 1. Overview
CareerHighMatch.ai is a values-driven, AI-powered career matching platform. Its mission is to help individuals find teams they truly belong to, and help hiring teams attract people aligned with their values, interests, and purpose. It goes beyond keyword-based resumes and focuses on human compatibility.

---

## 2. User Personas

### 2.1 Job Seekers
- **Demographics**: Young professionals, career changers, students, value-driven talents
- **Goals**: Find a team that aligns with their personality, working style, purpose, and culture
- **Pain Points**:
  - Generic job boards with irrelevant matches
  - Lack of cultural fit insight
  - Feeling undervalued or underutilized

### 2.2 Hiring Teams / Partners
- **Demographics**: Startups, scale-ups, value-oriented companies, hiring managers
- **Goals**: Attract people who match their mission, team dynamic, and long-term culture
- **Pain Points**:
  - Hiring based on skills but failing on retention or culture
  - Difficulty filtering for "fit"
  - Low conversion from job boards

---

## 3. Core User Flows

### 3.1 Flow A: Job Seeker Journey
1. Visit Homepage
2. Click "Join Early Access"
3. Fill out Tally form (name, email, interests)
4. [Future] Receive curated team matches or onboarding

### 3.2 Flow B: Partner Journey
1. Visit Homepage
2. Click "Partner With Us"
3. Fill out Tally form (name, org, email, intent)
4. [Future] Team onboarding and cultural profile intake

---

## 4. MVP Feature Scope

| Feature                          | Status   | Notes                                      |
|----------------------------------|----------|--------------------------------------------|
| Responsive landing page         | ✅ Done   | index.html complete                        |
| About page                      | ✅ Done   | about.html written                         |
| Early Access form (Tally)       | ✅ Done   | Tally integrated                           |
| Partner With Us form (Tally)    | ✅ Done   | With multiple-choice and optional fields   |
| Custom domain                   | ✅ Done   | careerhighmatch.ai set via GitHub Pages    |
| Thank You redirect page         | ✅ Optional | thankyou.html provided                     |
| AI matching logic               | ❌ Future | For phase 2, based on vector similarity     |
| Dashboard (Job Seeker)          | ❌ Future | User profile & suggested teams             |
| Dashboard (Partner)             | ❌ Future | Submit team culture, view applicants       |

---

## 5. Tech Stack (for MVP)
- **Frontend**: HTML/CSS/JS
- **Hosting**: GitHub Pages + Custom Domain
- **Forms**: Tally.so (Email forwarding)
- **Email**: Google Workspace (founders@careerhighmatch.ai)
- **Future Backend**: Go + PostgreSQL + OpenAI API
- **Future Infra**: Kubernetes, Vector DB (e.g. Weaviate)

---

## 6. Out of Scope (Phase 1)
- User login & authentication
- Profile editing system
- Team-to-candidate messaging/chat
- Real-time AI match ranking
- In-app dashboards and analytics

---

## 7. Next Steps
- [ ] Finalize copy and CTA across both forms
- [ ] Design visual identity / logo
- [ ] Invite 10 early users & 5 partner orgs to test
- [ ] Begin ideating cultural match algorithm v1
- [ ] Publish blog post: "Why we’re building CareerHighMatch.ai"

---

## 8. Core Matching Logic (Phase 2 – Vision)

### 8.1 Inputs
- **User inputs** (via forms or quizzes):
  - Personality assessment (e.g. Big Five, MBTI-style)
  - Core values (e.g. autonomy, growth, collaboration)
  - Collaboration style (structured vs. flexible, async vs. sync)
  - Role preferences (e.g. IC vs. lead, fast-paced vs. stable)

- **Team inputs**:
  - Culture tags (e.g. transparent, mission-driven, creative)
  - Archetypes of existing team members
  - Purpose/mission alignment
  - Hiring intent & role details

### 8.2 Matching Engine
- **Vectorization**: Encode individual profiles and team profiles into vectors
- **Similarity model**: Use cosine similarity or distance metrics to compute fit scores
- **Ranking**: Candidates and teams are matched based on fit, not just skills

### 8.3 Output
- Personalized “Team Fit Score” with visual explanation (e.g., radar/spider graph)
- Suggested introductions (e.g., “Top 3 teams that align with your mindset”)

---

## 9. Growth Strategy & Outreach Plan

### 9.1 Early User Acquisition
- **Target Audience**:
  - Recent graduates and career changers in tech, design, and social impact
  - Individuals dissatisfied with traditional job platforms
- **Channels**:
  - LinkedIn storytelling posts by founder
  - Direct outreach to university career centers
  - Invitation-only early access via Tally form

### 9.2 Partner/Organization Acquisition
- **Ideal Partner Profile**:
  - Startups, NGOs, and value-aligned teams seeking long-term fits
- **Outreach Channels**:
  - AngelList, LinkedIn Recruiter, founder networks
  - Co-marketing with HR influencers and AI hiring blogs

### 9.3 Community Building
- **Approach**:
  - Publish stories from job seekers and teams on Medium
  - Host small virtual salons for users to discuss “work that matters”
  - Build a referral reward program for super-referrers

---

**Document owner**: Ying Xie  
**Last updated**: June 7, 2025
