
import React from 'react'

export default function Footer() {
    return (
        <div role="contentinfo" class="member-footer">
            <div class="social-links">
                <a class="social-link" href="https://www.facebook.com/NetflixDACH" target="_blank" aria-label="facebook">
                    <svg class="svg-icon svg-icon-facebook-logo" focusable="true">
                        <use filter="" href="#facebook-logo"></use>
            </svg>
        </a>
            <a class="social-link" href="https://www.instagram.com/NetflixDE" target="_blank" aria-label="instagram">
                <svg class="svg-icon svg-icon-instagram-logo" focusable="true">
                    <use filter="" href="#instagram-logo"></use>
            </svg>
        </a>
        <a class="social-link" href="https://twitter.com/NetflixDE" target="_blank" aria-label="twitter">
            <svg class="svg-icon svg-icon-twitter-logo" focusable="true">
                <use filter="" href="#twitter-logo"></use>
            </svg>
        </a >
        <a class="social-link" href="https://www.youtube.com/user/netflixdach" target="_blank" aria-label="youtube">
            <svg class="svg-icon svg-icon-youtube-logo" focusable="true">
                <use filter="" href="#youtube-logo"></use>
            </svg>
        </a >
    </div >
        <ul class="member-footer-links">
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="/browse/subtitles"><span class="member-footer-link-content">Audio and Subtitles</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="/browse/audio-description"><span class="member-footer-link-content">Audio Description</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://help.netflix.com/"><span class="member-footer-link-content">Help Center</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="/redeem"><span class="member-footer-link-content">Gift Cards</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://media.netflix.com/"><span class="member-footer-link-content">Media Center</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="http://ir.netflix.com/"><span class="member-footer-link-content">Investor Relations</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://jobs.netflix.com/"><span class="member-footer-link-content">Jobs</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://help.netflix.com/legal/termsofuse"><span class="member-footer-link-content">Terms of Use</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://help.netflix.com/legal/privacy"><span class="member-footer-link-content">Privacy</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://help.netflix.com/legal/notices"><span class="member-footer-link-content">Legal Notices</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="/Cookies"><span class="member-footer-link-content">Cookie Preferences</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://help.netflix.com/support/2101"><span class="member-footer-link-content">Corporate Information</span></a></li>
            <li class="member-footer-link-wrapper"><a class="member-footer-link" href="https://help.netflix.com/contactus"><span class="member-footer-link-content">Contact Us</span></a></li>
        </ul>
        <div class="member-footer-service">
            <button class="service-code">Service Code</button>
        </div>

</div >
    )
}
