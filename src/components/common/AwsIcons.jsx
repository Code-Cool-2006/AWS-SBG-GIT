export function AwsLogoImg({ width = 42, className = '', white = true, alt = 'AWS' }) {
  return (
    <img
      src={white ? '/aws-icons/aws-white.svg' : '/aws-icons/aws.svg'}
      alt={alt}
      width={width}
      height="auto"
      className={className}
      style={{ display: 'inline-block', objectFit: 'contain' }}
    />
  )
}

export function AwsServiceIcon({ name, size = 32, className = '' }) {
  const iconMap = {
    ec2: '/aws-icons/ec2.svg',
    s3: '/aws-icons/s3.svg',
    lambda: '/aws-icons/lambda.svg',
    dynamodb: '/aws-icons/dynamodb.svg',
    cloudformation: '/aws-icons/cloudformation.svg',
    iam: '/aws-icons/iam.svg',
    amplify: '/aws-icons/amplify.svg',
    apigateway: '/aws-icons/api-gateway.svg',
    architect: '/aws-icons/architect.svg',
  }

  const src = iconMap[name.toLowerCase()] || '/aws-icons/aws-white.svg'

  return (
    <img
      src={src}
      alt={`${name} icon`}
      width={size}
      height={size}
      className={className}
      style={{ display: 'inline-block', objectFit: 'contain' }}
    />
  )
}
