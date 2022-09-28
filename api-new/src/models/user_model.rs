use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

use super::challenge_model::{CompletedChallenge, SavedChallenge};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct User {
    pub about: String,
    pub accepted_privacy_terms: bool,
    pub badges: Badges,
    pub codepen: String,
    pub completed_challenges: Vec<CompletedChallenge>,
    #[serde(rename = "_csrf")]
    pub csrf: String,
    pub current_challenge_id: String,
    pub donation_emails: Vec<String>,
    pub email: String,
    pub github_profile: String,
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub is_apis_microservices_cert: bool,
    pub is_back_end_cert: bool,
    pub is_banned: bool,
    pub is_data_analysis_py_cert_v7: bool,
    pub is_cheater: bool,
    pub is_data_vis_cert: bool,
    pub is_donating: bool,
    pub is_front_end_cert: bool,
    pub is_front_end_libs_cert: bool,
    pub is_full_stack_cert: bool,
    pub is_honest: bool,
    pub is_infosec_cert_v7: bool,
    pub is_infosec_qa_cert: bool,
    pub is_js_algo_dat_struct_cert: bool,
    pub is_machine_learning_py_cert_v7: bool,
    pub is_qa_cert_v7: bool,
    pub is_relational_database_cert_v8: bool,
    pub is_resp_web_design_cert: bool,
    pub is_sci_comp_py_cert_v7: bool,
    pub is_2018_data_vis_cert: bool,
    pub is_2018_full_stack_cert: bool,
    pub keyboard_shortcuts: bool,
    pub linkedin: String,
    pub location: String,
    pub name: String,
    pub needs_moderation: bool,
    // Purposefully left out.
    // pub password: String,
    pub partially_completed_challenges: Vec<Timestamp>,
    pub picture: String,
    // TODO: Placeholder
    pub portfolio: Vec<String>,
    #[serde(rename = "profileUI")]
    pub profile_ui: ProfileSettings,
    pub progress_timestamps: Vec<Timestamp>,
    pub rand: usize,
    pub saved_challenges: Vec<SavedChallenge>,
    pub send_quincy_email: bool,
    pub sound: bool,
    pub theme: String,
    pub timezone: String,
    pub twitter: String,
    pub username: String,
    pub username_display: String,
    pub website: String,
    pub years_top_contributor: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Timestamp {
    completed_date: usize,
    id: String,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ProfileSettings {
    is_locked: bool,
    show_about: bool,
    show_certs: bool,
    show_donation: bool,
    show_heat_map: bool,
    show_location: bool,
    show_name: bool,
    show_points: bool,
    show_portfolio: bool,
    show_time_line: bool,
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Badges {
    // TODO: I am guessing here
    core_team: Vec<String>,
}
